// Receitas de integração entre mods
// - Void

ServerEvents.recipes(event => {
    console.log('The recipe event has fired! (Integração)');

    // Create <-> Mystical Agriculture
    // Mixing

    const essences = [
        "mysticalagriculture:inferium_essence", "mysticalagriculture:prudentium_essence", "mysticalagriculture:tertium_essence", "mysticalagriculture:imperium_essence", "mysticalagriculture:supremium_essence", "mysticalagradditions:insanium_essence"
    ];

    for (let i = 0; i < essences.length - 1; i++) {
        event.custom({
            "type": "create:mixing",
            "ingredients": [
                {
                    "item": essences[i],
                },
                {
                    "item": essences[i],
                },
                {
                    "item": essences[i],
                },
                {
                    "item": essences[i],
                },
                {
                    "item": essences[i],
                },
                {
                    "item": essences[i],
                },
                {
                    "item": essences[i],
                },
                {
                    "item": essences[i],
                },
                {
                    "tag": "mysticalagriculture:infusion_crystals"
                }
            ],
            "results": [
                {
                    "item": essences[i + 1]
                }
            ]
        })
    }

    // TConstruct e Iron Furnaces
    // Fornalha de Cobalto

    event.replaceInput(
        { mod: 'ironfurnaces'},
        'minecraft:emerald',
        Ingredient.of('tconstruct:cobalt_ingot')
    )

    // Create <-> Occultism
    // Crushing

    event.custom({
        "type": "create:crushing",
        "ingredients": [
            {
                "item": "occultism:iesnium_ore"
            }
        ],
        "processingTime": 450,
        "results": [
            {
                "count": 2,
                "item": "occultism:iesnium_dust"
            },
            {
                "chance": 0.25,
                "item": "occultism:iesnium_dust"
            },
            {
                "chance": 0.75,
                "item": "create:experience_nugget"
            },
            {
                "chance": 0.125,
                "item": "occultism:otherstone"
            }
        ]
    })

});