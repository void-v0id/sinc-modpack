// Receitas gerais

ServerEvents.recipes(event => {
    console.log('The recipe event has fired! (Receitas)')

    // Conflitos
    event.remove({ output: 'mekanism:block_charcoal' })
    event.remove({ output: 'tconstruct:steel_ingot' })

    event.remove({ output: 'tconstruct:gold_bars' })
    event.replaceInput(
        { input: 'tconstruct:gold_bars' },
        'tconstruct:gold_bars',
        Ingredient.of('quark:gold_bars')
    )
    event.custom({
        "type": "tconstruct:casting_table",
        "cooling_time": 33,
        "fluid": {
            "amount": 30,
            "tag": "forge:molten_gold"
        },
        "result": "quark:gold_bars"
    })

    event.replaceOutput(
        { output: 'tconstruct:steel_nugget' },
        'tconstruct:steel_nugget',
        Ingredient.of('mekanism:nugget_steel')
    )

    event.remove({ output: 'immersive_aircraft:propeller' })
    event.replaceInput(
        { mod: 'immersive_aircraft' },
        'immersive_aircraft:propeller',
        Ingredient.of('create:propeller')
    )

    // Remover farm de diamante.
    event.remove({ id: 'occultism:crushing/diamond_dust' })
    event.recipes.occultism.crushing(
		'2x #forge:dusts/diamond',
		'#forge:ores/diamond'
	)

    event.remove({ id: 'mekanism:processing/diamond/to_deepslate_ore'})
    event.remove({ id: 'mekanism:processing/diamond/to_ore'})

    event.custom({
        "type": "mekanism:combining",
        "extraInput": {
            "ingredient": {
                "tag": "forge:cobblestone/deepslate"
            }
        },
        "mainInput": {
            "amount": 6,
            "ingredient": {
                "tag": "forge:dusts/diamond"
            }
        },
        "output": {
            "item": "minecraft:deepslate_diamond_ore"
        }
    })

    event.custom({
        "type": "mekanism:combining",
        "extraInput": {
            "ingredient": {
                "tag": "forge:cobblestone/normal"
            }
        },
        "mainInput": {
            "amount": 6,
            "ingredient": {
                "tag": "forge:dusts/diamond"
            }
        },
        "output": {
            "item": "minecraft:diamond_ore"
        }
    })

    event.remove({ id: 'occultism:crushing/diamond_dust_from_gem'})

    // Remover farm de Esmeralda.

    event.remove({ id: 'occultism:crushing/emerald_dust_from_gem'})
    event.remove({ id: 'occultism:crushing/emerald_dust'})

    event.recipes.occultism.crushing(
		'2x #forge:dusts/emerald',
		'#forge:ores/emerald'
	)

    event.remove({ id: 'mekanism:processing/emerald/to_deepslate_ore'})
    event.remove({ id: 'mekanism:processing/emerald/to_ore'})

    event.custom({
        "type": "mekanism:combining",
        "extraInput": {
            "ingredient": {
                "tag": "forge:cobblestone/deepslate"
            }
        },
        "mainInput": {
            "amount": 6,
            "ingredient": {
                "tag": "forge:dusts/emerald"
            }
        },
        "output": {
            "item": "minecraft:deepslate_emerald_ore"
        }
    })

    event.custom({
        "type": "mekanism:combining",
        "extraInput": {
            "ingredient": {
                "tag": "forge:cobblestone/normal"
            }
        },
        "mainInput": {
            "amount": 6,
            "ingredient": {
                "tag": "forge:dusts/emerald"
            }
        },
        "output": {
            "item": "minecraft:emerald_ore"
        }
    })


    // Essências mais difíceis :serious:
    const essences = [
        "mysticalagriculture:inferium_essence", "mysticalagriculture:prudentium_essence", "mysticalagriculture:tertium_essence", "mysticalagriculture:imperium_essence", "mysticalagriculture:supremium_essence", "mysticalagradditions:insanium_essence"
    ];

    essences.forEach(essence => {

        event.remove({ output: essence })
    })

    for (let i = 0; i < essences.length - 1; i++) {
        event.shaped(
            Item.of(essences[i + 1]),
            [
                'EEE',
                'EIE',
                'EEE'
            ], {
                E: essences[i],
                I: '#mysticalagriculture:infusion_crystals'
            }
        )
    }
    
    // Alternator +difícil
    
    event.remove({ output: 'createaddition:alternator' });
    event.custom(
        {
            "type": "create:mechanical_crafting",
            "acceptMirrored": false,
            "key": {
                "I": {
                    "item": "createdeco:industrial_iron_sheet"
                },
                "E": {
                    "item": "createaddition:electrum_spool"
                },
                "S": {
                    "item": "create:shaft"
                },
                "R": {
                    "item": "mekanism:alloy_reinforced"
                },
                "C": {
                    "item": "mekanism:basic_energy_cube"
                },
                "A": {
                    "item": "createaddition:capacitor"
                }
            },
            "pattern": [
                "  S  ",
                " IEI ",
                "IRCRI",
                " IAI "
            ],
            "result": {
                "item": "createaddition:alternator"
            }
        }
    );

    // Iron Furnaces
    // Factory Augment requer Mekanism

    event.remove({ output: "ironfurnaces:augment_factory"});
    event.shaped(
        Item.of("ironfurnaces:augment_factory"),
        [
            'IBI',
            'RCR',
            'IBI'
        ], {
            I: 'createdeco:industrial_iron_sheet',
            B: 'mekanism:basic_control_circuit',
            R: 'minecraft:redstone',
            C: 'mekanism:basic_energy_cube'
        }
    )

    // Generator Augment requer Mekanism
    event.remove({ output: 'ironfurnaces:augment_generator'})
    event.shaped(
        Item.of('ironfurnaces:augment_generator'),
        [
            'OAO',
            'ITI',
            'OAO'
        ],
        {
            O: 'mekanism:ingot_osmium',
            A: 'mekanism:advanced_control_circuit',
            I: 'mekanism:alloy_infused',
            T: 'mekanism:energy_tablet'

        }
    )

    // Speed Augment +doce
    event.remove({ output: 'ironfurnaces:augment_speed'})
    event.shaped(
        Item.of('ironfurnaces:augment_speed'),
        [
            'IHI',
            'CSC',
            'IHI'
        ], {
            I: 'minecraft:iron_ingot',
            C: 'supplementaries:candy',
            S: 'supplementaries:sugar_cube',
            H: 'minecraft:honeycomb'
        }
    )


    // Mekanism
    // Receitas propostas

    // Wind Generator
    event.remove({ output: 'mekanismgenerators:wind_generator'})
    event.shaped(
        Item.of('mekanismgenerators:wind_generator'),
        [
            ' P ',
            'SES',
            'ICI'
        ], {
            P: 'create:propeller',
            S: 'mekanism:ingot_steel',
            E: 'mekanism:elite_control_circuit',
            I: 'createdeco:industrial_iron_ingot',
            C: 'mekanism:basic_energy_cube'
        }
    )

    // Advanced Solar Generator
    event.remove({ output: 'mekanismgenerators:advanced_solar_generator'})
    event.shaped(
        Item.of('mekanismgenerators:advanced_solar_generator'),
        [
            'GSG',
            'GEG',
            'ICI'
        ], {
            G: 'mekanismgenerators:solar_generator',
            S: 'mekanism:steel_casing',
            E: 'mekanism:elite_universal_cable',
            I: 'createdeco:industrial_iron_ingot',
            C: 'mekanism:basic_energy_cube'
        }
    )

    // Solar Generator
    event.remove({ output: 'mekanismgenerators:solar_generator'})
    event.shaped(
        Item.of('mekanismgenerators:solar_generator'),
        [
            'PPP',
            'ASA',
            'ITI'
        ], {
            P: 'mekanismgenerators:solar_panel',
            A: 'mekanism:alloy_infused',
            S: 'mekanism:ingot_steel',
            I: 'createdeco:industrial_iron_ingot',
            T: 'mekanism:energy_tablet'
        }

    )

    // Atomic Disassembler
    event.remove({ output: 'mekanism:atomic_disassembler' })
    event.custom({
        "type": "create:mechanical_crafting",
        "accept_mirrored": false,
        "category": "misc",
        "key": {
            "E": {
                "item": "endelurgy:enderite_ingot"
            },
            "I": {
                "item": "mysticalagriculture:tertium_ingot"
            },
            "S": {
                "item": "ae2:singularity"
            },
            "T": {
                "item": "mekanism:energy_tablet"
            },
            "P": {
                "item": "ae2:engineering_processor"
            },
            "D": {
                "item": "born_in_chaos_v1:dark_rod"
            },
            "C": {
                "item": "createaddition:copper_rod"
            },
            "U": {
                "item": "mekanism:ultimate_control_circuit"
            }
        },
        "pattern": [
            " EI  ",
            "ETSPE",
            " EU  ",
            "  D  ",
            "  C  "
        ],
        "result": {
            "count": 1,
            "item": "mekanism:atomic_disassembler"
        },
        "show_notification": false
    })

    // CUSTOM!! :yt_shock:
    // Tecnicamente todas as receitas aqui são custom mas a gente não fala sobre isso.

    event.custom({
        "type": "createaddition:rolling",
        "input": {
            "item": "cataclysm:black_steel_ingot"
        },
        "result": {
            "item": "born_in_chaos_v1:dark_rod",
            "count": 1
        }
    })

    event.custom({
        "type": "occultism:spirit_fire",
        "ingredient": {
            "item": "createaddition:iron_rod"
        },
        "result": {
            "item": "born_in_chaos_v1:dark_rod"
        }
    })

})