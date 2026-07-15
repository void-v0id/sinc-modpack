// Receitas gerais

ServerEvents.recipes(event => {
    console.log('The recipe event has fired! (Receitas)')

    // Helpers
    const removeOutputs = outputs => outputs.forEach(o => event.remove({ output: o }))
    const removeById = ids => ids.forEach(id => event.remove({ id }))
    const shaped = (result, pattern, key) => event.shaped(Item.of(result), pattern, key)
    const custom = obj => event.custom(obj)

    const mekCombining = (dustTag, cobbleTag, outputItem) => {
        custom({
            type: 'mekanism:combining',
            extraInput: { ingredient: { tag: cobbleTag } },
            mainInput: { amount: 6, ingredient: { tag: dustTag } },
            output: { item: outputItem }
        })
    }

    // ---- CONFLITOS ----
    // Remover outputs simples
    removeOutputs([
        'mekanism:block_charcoal',
        'tconstruct:steel_ingot',
        'tconstruct:gold_bars', // removido para substituir por receita Quark
        'tconstruct:steel_nugget',
        'immersive_aircraft:propeller'
    ])

    // Substituições / Replace Inputs / Outputs
    event.replaceInput(
        { input: 'tconstruct:gold_bars' },
        'tconstruct:gold_bars',
        Ingredient.of('quark:gold_bars')
    )

    event.custom({
        type: 'tconstruct:casting_table',
        cooling_time: 33,
        fluid: { amount: 30, tag: 'forge:molten_gold' },
        result: 'quark:gold_bars'
    })

    event.replaceOutput(
        { output: 'tconstruct:steel_nugget' },
        'tconstruct:steel_nugget',
        Ingredient.of('mekanism:nugget_steel')
    )

    event.replaceInput(
        { mod: 'immersive_aircraft' },
        'immersive_aircraft:propeller',
        Ingredient.of('create:propeller')
    )

    // Create mixing example (que cria queijo)
    custom({
        type: 'create:mixing',
        ingredients: [
            { amount: 250, fluidTag: 'forge:milk' },
            { tag: 'forge:dusts/salt' }
        ],
        results: [{ item: 'rats:cheese' }]
    })

    // ---- REMOÇÕES / ALTERAÇÕES DE FARM ----
    // Diamante: remover farm e ajustar crushing/processing
    removeById([
        'occultism:crushing/diamond_dust',
        'occultism:crushing/diamond_dust_from_gem',
        'mekanism:processing/diamond/to_deepslate_ore',
        'mekanism:processing/diamond/to_ore'
    ])

    event.recipes.occultism.crushing(
        '2x #forge:dusts/diamond',
        '#forge:ores/diamond'
    )

    mekCombining('forge:dusts/diamond', 'forge:cobblestone/deepslate', 'minecraft:deepslate_diamond_ore')
    mekCombining('forge:dusts/diamond', 'forge:cobblestone/normal', 'minecraft:diamond_ore')

    // Esmeralda: remover farm e ajustar crushing/processing
    removeById([
        'occultism:crushing/emerald_dust_from_gem',
        'occultism:crushing/emerald_dust',
        'mekanism:processing/emerald/to_deepslate_ore',
        'mekanism:processing/emerald/to_ore'
    ])

    event.recipes.occultism.crushing(
        '2x #forge:dusts/emerald',
        '#forge:ores/emerald'
    )

    mekCombining('forge:dusts/emerald', 'forge:cobblestone/deepslate', 'minecraft:deepslate_emerald_ore')
    mekCombining('forge:dusts/emerald', 'forge:cobblestone/normal', 'minecraft:emerald_ore')

    // ---- BALANCEAMENTO ----
    // Essências mais difíceis :serious:
    const essences = [
        "mysticalagriculture:inferium_essence",
        "mysticalagriculture:prudentium_essence",
        "mysticalagriculture:tertium_essence",
        "mysticalagriculture:imperium_essence",
        "mysticalagriculture:supremium_essence",
        "mysticalagriculture:insanium_essence"
    ]

    // Remover receitas existentes que geram as essências e recriar em cadeia
    essences.forEach(essence => event.remove({ output: essence }))

    for (let i = 0; i < essences.length - 1; i++) {
        event.shaped(
            Item.of(essences[i + 1]),
            [
                'EEE',
                'EIE',
                'EEE'
            ],
            {
                E: essences[i],
                I: '#mysticalagriculture:infusion_crystals'
            }
        )
    }

    // ---- ITENS REWORKADOS / DIFICULDADE ----
    // Alternator (mais difícil)
    event.remove({ output: 'createaddition:alternator' })
    custom({
        type: 'create:mechanical_crafting',
        acceptMirrored: false,
        key: {
            I: { item: 'createdeco:industrial_iron_sheet' },
            E: { item: 'createaddition:electrum_spool' },
            S: { item: 'create:shaft' },
            R: { item: 'mekanism:alloy_reinforced' },
            C: { item: 'mekanism:basic_energy_cube' },
            A: { item: 'createaddition:capacitor' }
        },
        pattern: [
            '  S  ',
            ' IEI ',
            'IRCRI',
            ' IAI '
        ],
        result: { item: 'createaddition:alternator' }
    })

    // Iron Furnaces augments (requer Mekanism)
    event.remove({ output: 'ironfurnaces:augment_factory' })
    shaped(
        'ironfurnaces:augment_factory',
        ['IBI', 'RCR', 'IBI'],
        {
            I: 'createdeco:industrial_iron_sheet',
            B: 'mekanism:basic_control_circuit',
            R: 'minecraft:redstone',
            C: 'mekanism:basic_energy_cube'
        }
    )

    event.remove({ output: 'ironfurnaces:augment_generator' })
    shaped(
        'ironfurnaces:augment_generator',
        ['OAO', 'ITI', 'OAO'],
        {
            O: 'mekanism:ingot_osmium',
            A: 'mekanism:advanced_control_circuit',
            I: 'mekanism:alloy_infused',
            T: 'mekanism:energy_tablet'
        }
    )

    event.remove({ output: 'ironfurnaces:augment_speed' })
    shaped(
        'ironfurnaces:augment_speed',
        ['IHI', 'CSC', 'IHI'],
        {
            I: 'minecraft:iron_ingot',
            C: 'supplementaries:candy',
            S: 'supplementaries:sugar_cube',
            H: 'minecraft:honeycomb'
        }
    )

    // ---- MEKANISM: RECEITAS PROPOSTAS ----
    event.remove({ output: 'mekanismgenerators:wind_generator' })
    shaped(
        'mekanismgenerators:wind_generator',
        [' P ', 'SES', 'ICI'],
        {
            P: 'create:propeller',
            S: 'mekanism:ingot_steel',
            E: 'mekanism:elite_control_circuit',
            I: 'createdeco:industrial_iron_ingot',
            C: 'mekanism:basic_energy_cube'
        }
    )

    event.remove({ output: 'mekanismgenerators:advanced_solar_generator' })
    shaped(
        'mekanismgenerators:advanced_solar_generator',
        ['GSG', 'GEG', 'ICI'],
        {
            G: 'mekanismgenerators:solar_generator',
            S: 'mekanism:steel_casing',
            E: 'mekanism:elite_universal_cable',
            I: 'createdeco:industrial_iron_ingot',
            C: 'mekanism:basic_energy_cube'
        }
    )

    event.remove({ output: 'mekanismgenerators:solar_generator' })
    shaped(
        'mekanismgenerators:solar_generator',
        ['PPP', 'ASA', 'ITI'],
        {
            P: 'mekanismgenerators:solar_panel',
            A: 'mekanism:alloy_infused',
            S: 'mekanism:ingot_steel',
            I: 'createdeco:industrial_iron_ingot',
            T: 'mekanism:energy_tablet'
        }
    )

    // Atomic Disassembler (mechanical crafting)
    event.remove({ output: 'mekanism:atomic_disassembler' })
    custom({
        type: 'create:mechanical_crafting',
        accept_mirrored: false,
        category: 'misc',
        key: {
            E: { item: 'endelurgy:enderite_ingot' },
            I: { item: 'mysticalagriculture:tertium_ingot' },
            S: { item: 'ae2:singularity' },
            T: { item: 'mekanism:energy_tablet' },
            P: { item: 'ae2:engineering_processor' },
            D: { item: 'born_in_chaos_v1:dark_rod' },
            C: { item: 'createaddition:copper_rod' },
            U: { item: 'mekanism:ultimate_control_circuit' }
        },
        pattern: [
            ' EI  ',
            'ETSPE',
            ' EU  ',
            '  D  ',
            '  C  '
        ],
        result: { count: 1, item: 'mekanism:atomic_disassembler' },
        show_notification: false
    })

    // ---- CUSTOM ----
    custom({
        type: 'createaddition:rolling',
        input: { item: 'cataclysm:black_steel_ingot' },
        result: { item: 'born_in_chaos_v1:dark_rod', count: 1 }
    })

    custom({
        type: 'occultism:spirit_fire',
        ingredient: { item: 'createaddition:iron_rod' },
        result: { item: 'born_in_chaos_v1:dark_rod' }
    })
})
