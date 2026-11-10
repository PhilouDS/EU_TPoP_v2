export const AUSTRIA_TARGETING = {
  id: "austria",

  military: {
    startNode: "root",

    nodes: {
      root: {
        branches: [
          { values: [1], next: "ownerBrescia" },
          { values: [2], next: "bavaria" },
          { values: [3], next: "bohemia" },
          { values: [4], next: "ownerPozsony" },
          { values: [5, 6], next: "opponentElectorAreas" }
        ]
      },

      ownerBrescia: {
        target: {
          type: "ownerOfProvince",
          labelKey: "botRealmTargeting.targets.ownerBrescia"
        },
        branches: [
          { values: [1, 2, 3], next: "ownerFrancheComte" },
          { values: [4], next: "venice" },
          { values: [5, 6], next: "realmLombardy" }
        ]
      },

      ownerFrancheComte: {
        target: {
          type: "ownerOfProvince",
          labelKey: "botRealmTargeting.targets.ownerFrancheComte"
        },
        branches: [
          { values: [1, 2, 3, 4], next: "ownerLuxembourg" },
          { values: [5, 6], next: "savoy" }
        ]
      },

      ownerLuxembourg: {
        target: {
          type: "ownerOfProvince",
          labelKey: "botRealmTargeting.targets.ownerLuxembourg"
        },
        next: "ownerArtois"
      },

      ownerArtois: {
        target: {
          type: "ownerOfProvince",
          labelKey: "botRealmTargeting.targets.ownerArtois"
        },
        next: "france"
      },

      france: {
        target: {
          type: "realm",
          labelKey: "botRealmTargeting.targets.france"
        }
      },

      venice: {
        target: {
          type: "realm",
          labelKey: "botRealmTargeting.targets.venice"
        },
        branches: [
          { values: [1, 2, 3], next: "savoy" },
          { values: [4, 5, 6], next: "realmCentralItaly" }
        ]
      },

      realmLombardy: {
        target: {
          type: "realmInArea",
          labelKey: "botRealmTargeting.targets.realmLombardy"
        },
        branches: [
          { values: [1, 2, 3], next: "venice" },
          { values: [4, 5, 6], next: "realmCentralItaly" }
        ]
      },

      savoy: {
        target: {
          type: "realm",
          labelKey: "botRealmTargeting.targets.savoy"
        },
        branches: [
          { values: [1, 2], next: "ownerLuxembourg" },
          { values: [3], next: "ownerArtois" },
          { values: [4, 5, 6], next: "ownerNamur" }
        ]
      },

      realmCentralItaly: {
        target: {
          type: "realmInArea",
          labelKey: "botRealmTargeting.targets.realmCentralItaly"
        },
        next: "ownerNapoli"
      },

      ownerNapoli: {
        target: {
          type: "ownerOfProvince",
          labelKey: "botRealmTargeting.targets.ownerNapoli"
        },
        next: "ownerMesina"
      },

      ownerMesina: {
        target: {
          type: "ownerOfProvince",
          labelKey: "botRealmTargeting.targets.ownerMesina"
        },
        next: "castile"
      },

      castile: {
        target: {
          type: "realm",
          labelKey: "botRealmTargeting.targets.castile"
        }
      },

      bavaria: {
        target: {
          type: "realm",
          labelKey: "botRealmTargeting.targets.bavaria"
        },
        branches: [
          { values: [1], next: "ownerBrescia" },
          { values: [2], next: "realmLombardy" },
          { values: [3], next: "realmRhineland" },
          { values: [4], next: "salzburg" },
          { values: [5, 6], next: "saxony" }
        ]
      },

      salzburg: {
        target: {
          type: "realm",
          labelKey: "botRealmTargeting.targets.salzburg"
        },
        branches: [
          { values: [1, 2, 3, 4], next: "realmRhineland" },
          { values: [5, 6], next: "saxony" }
        ]
      },

      realmRhineland: {
        target: {
          type: "realmInArea",
          labelKey: "botRealmTargeting.targets.realmRhineland"
        },
        branches: [
          { values: [1, 2], next: "ownerNamur" },
          { values: [3, 4], next: "ownerAntwerpen" },
          { values: [5], next: "ownerGent" },
          { values: [6], next: "ownerHolstein" }
        ]
      },

      ownerNamur: {
        target: {
          type: "ownerOfProvince",
          labelKey: "botRealmTargeting.targets.ownerNamur"
        },
        next: "ownerAmsterdam"
      },

      ownerAntwerpen: {
        target: {
          type: "ownerOfProvince",
          labelKey: "botRealmTargeting.targets.ownerAntwerpen"
        },
        branches: [
          { values: [1, 2, 3], next: "ownerAmsterdam" },
          { values: [4, 5, 6], next: "ownerGent" }
        ]
      },

      ownerGent: {
        target: {
          type: "ownerOfProvince",
          labelKey: "botRealmTargeting.targets.ownerGent"
        },
        branches: [
          { values: [1, 2, 3], next: "ownerAmsterdam" },
          { values: [4, 5, 6], next: "realmNetherlands" }
        ]
      },

      ownerAmsterdam: {
        target: {
          type: "ownerOfProvince",
          labelKey: "botRealmTargeting.targets.ownerAmsterdam"
        },
        next: "realmNetherlands"
      },

      realmNetherlands: {
        target: {
          type: "realmInArea",
          labelKey: "botRealmTargeting.targets.realmNetherlands"
        }
      },

      ownerHolstein: {
        target: {
          type: "ownerOfProvince",
          labelKey: "botRealmTargeting.targets.ownerHolstein"
        },
        branches: [
          { values: [1, 2], next: "realmNetherlands" },
          { values: [3, 4], next: "denmark" },
          { values: [5, 6], next: "ownerKonigsberg" }
        ]
      },

      denmark: {
        target: {
          type: "realm",
          labelKey: "botRealmTargeting.targets.denmark"
        },
        next: "sweden"
      },

      sweden: {
        target: {
          type: "realm",
          labelKey: "botRealmTargeting.targets.sweden"
        }
      },

      ownerKonigsberg: {
        target: {
          type: "ownerOfProvince",
          labelKey: "botRealmTargeting.targets.ownerKonigsberg",
          requiresEasternEuropeMap: true
        }
      },

      saxony: {
        target: {
          type: "realm",
          labelKey: "botRealmTargeting.targets.saxony"
        },
        branches: [
          { values: [1, 2, 3], next: "ownerHolstein" },
          { values: [4, 5, 6], next: "brandenburgPrussia" }
        ]
      },

      brandenburgPrussia: {
        target: {
          type: "realm",
          labelKey: "botRealmTargeting.targets.brandenburgPrussia"
        },
        branches: [
          { values: [1, 2], next: "denmark" },
          { values: [3, 4, 5, 6], next: "ownerKonigsberg" }
        ]
      },

      bohemia: {
        target: {
          type: "realm",
          labelKey: "botRealmTargeting.targets.bohemia"
        },
        branches: [
          { values: [1], next: "bavaria" },
          { values: [2], next: "salzburg" },
          { values: [3], next: "saxony" },
          { values: [4], next: "ownerSilesia" },
          { values: [5], next: "poland" },
          { values: [6], next: "ownerPozsony" }
        ]
      },

      ownerSilesia: {
        target: {
          type: "ownerOfProvince",
          labelKey: "botRealmTargeting.targets.ownerSilesia"
        },
        branches: [
          { values: [1, 2, 3, 4], next: "brandenburgPrussia" },
          { values: [5, 6], next: "poland" }
        ]
      },

      poland: {
        target: {
          type: "realm",
          labelKey: "botRealmTargeting.targets.poland"
        },
        next: "ownerPest"
      },

      ownerPozsony: {
        target: {
          type: "ownerOfProvince",
          labelKey: "botRealmTargeting.targets.ownerPozsony"
        },
        branches: [
          { values: [1, 2], next: "ragusa" },
          { values: [3, 4], next: "poland" },
          { values: [5, 6], next: "ownerPest" }
        ]
      },

      opponentElectorAreas: {
        target: {
          type: "realm",
          labelKey: "botRealmTargeting.targets.opponentElectorAreas",
          selectionRule: "opponentElectorAreas"
        },
        branches: [
          { values: [1, 2, 3], next: "bohemia" },
          { values: [4, 5, 6], next: "ownerPozsony" }
        ]
      },

      ownerPest: {
        target: {
          type: "ownerOfProvince",
          labelKey: "botRealmTargeting.targets.ownerPest"
        },
        branches: [
          { values: [1, 2], next: "ragusa" },
          { values: [3, 4], next: "ownerBosnia" },
          { values: [5, 6], next: "ownerBeograd" }
        ]
      },

      ragusa: {
        target: {
          type: "realm",
          labelKey: "botRealmTargeting.targets.ragusa"
        },
        branches: [
          { values: [1, 2], next: "ownerNapoli" },
          { values: [3, 4], next: "ownerAlbania" },
          { values: [5, 6], next: "ownerBosnia" }
        ]
      },

      ownerBosnia: {
        target: {
          type: "ownerOfProvince",
          labelKey: "botRealmTargeting.targets.ownerBosnia"
        },
        branches: [
          { values: [1, 2], next: "ownerAlbania" },
          { values: [3, 4], next: "ownerKosovo" },
          { values: [5, 6], next: "ownerBeograd" }
        ]
      },

      ownerAlbania: {
        target: {
          type: "ownerOfProvince",
          labelKey: "botRealmTargeting.targets.ownerAlbania",
          requiresEasternEuropeMap: true
        },
        next: "ownerNapoli"
      },

      ownerKosovo: {
        target: {
          type: "ownerOfProvince",
          labelKey: "botRealmTargeting.targets.ownerKosovo"
        },
        next: "wallachia"
      },

      wallachia: {
        target: {
          type: "realm",
          labelKey: "botRealmTargeting.targets.wallachia",
          requiresEasternEuropeMap: true
        },
        next: "moldavia"
      },

      moldavia: {
        target: {
          type: "realm",
          labelKey: "botRealmTargeting.targets.moldavia",
          requiresEasternEuropeMap: true
        }
      },

      ownerBeograd: {
        target: {
          type: "ownerOfProvince",
          labelKey: "botRealmTargeting.targets.ownerBeograd",
          requiresEasternEuropeMap: true
        },
        branches: [
          { values: [1, 2, 3], next: "ownerKosovo" },
          { values: [4, 5, 6], next: "ottomans" }
        ]
      },

      ottomans: {
        target: {
          type: "realm",
          labelKey: "botRealmTargeting.targets.ottomans",
          requiresEasternEuropeMap: true
        }
      }
    }
  },

  diplomatic: {
    startNode: "root",

    nodes: {
      root: {
        branches: [
          { values: [1, 2], next: "realmBurgundy" },
          { values: [3], next: "bavaria" },
          { values: [4], next: "bohemia" },
          { values: [5, 6], next: "ownerPest" }
        ]
      },

      realmBurgundy: {
        target: {
          type: "realmInArea",
          labelKey: "botRealmTargeting.targets.realmBurgundy"
        },
        branches: [
          { values: [1, 2, 3], next: "realmLombardy" },
          { values: [4, 5], next: "savoy" },
          { values: [6], next: "switzerland" }
        ]
      },

      bavaria: {
        target: {
          type: "realm",
          labelKey: "botRealmTargeting.targets.bavaria"
        },
        branches: [
          { values: [1, 2], next: "realmBurgundy" },
          { values: [3], next: "switzerland" },
          { values: [4], next: "realmRhineland" },
          { values: [5], next: "salzburg" },
          { values: [6], next: "saxony" }
        ]
      },

      bohemia: {
        target: {
          type: "realm",
          labelKey: "botRealmTargeting.targets.bohemia"
        },
        branches: [
          { values: [1, 2], next: "bavaria" },
          { values: [3, 4], next: "saxony" },
          { values: [5], next: "ownerFirenze" },
          { values: [6], next: "papalStates" }
        ]
      },

      ownerPest: {
        target: {
          type: "ownerOfProvince",
          labelKey: "botRealmTargeting.targets.ownerPest"
        },
        branches: [
          { values: [1, 2], next: "bohemia" },
          { values: [3], next: "ownerFirenze" },
          { values: [4], next: "papalStates" },
          { values: [5], next: "ragusa" },
          { values: [6], next: "ownerBosnia" }
        ]
      },

      realmLombardy: {
        target: {
          type: "realmInArea",
          labelKey: "botRealmTargeting.targets.realmLombardy"
        },
        branches: [
          { values: [1, 2, 3], next: "realmCorsicaSardinia" },
          { values: [4, 5, 6], next: "papalStates" }
        ]
      },

      savoy: {
        target: {
          type: "realm",
          labelKey: "botRealmTargeting.targets.savoy"
        },
        branches: [
          { values: [1, 2, 3], next: "realmLanguedoc" },
          { values: [4, 5, 6], next: "realmRhineland" }
        ]
      },

      switzerland: {
        target: {
          type: "realm",
          labelKey: "botRealmTargeting.targets.switzerland"
        },
        next: "realmRhineland"
      },

      salzburg: {
        target: {
          type: "realm",
          labelKey: "botRealmTargeting.targets.salzburg"
        },
        branches: [
          { values: [1, 2, 3], next: "realmRhineland" },
          { values: [4, 5, 6], next: "saxony" }
        ]
      },

      saxony: {
        target: {
          type: "realm",
          labelKey: "botRealmTargeting.targets.saxony"
        },
        branches: [
          { values: [1, 2], next: "realmWestphalia" },
          { values: [3, 4], next: "realmLowerSaxony" },
          { values: [5, 6], next: "brandenburgPrussia" }
        ]
      },

      ownerFirenze: {
        target: {
          type: "ownerOfProvince",
          labelKey: "botRealmTargeting.targets.ownerFirenze"
        },
        branches: [
          { values: [1, 2], next: "savoy" },
          { values: [3, 4], next: "ownerSiena" },
          { values: [5, 6], next: "ownerNapoli" }
        ]
      },

      papalStates: {
        target: {
          type: "realm",
          labelKey: "botRealmTargeting.targets.papalStates"
        },
        branches: [
          { values: [1, 2, 3], next: "ownerNapoli" },
          { values: [4, 5, 6], next: "venice" }
        ]
      },

      ragusa: {
        target: {
          type: "realm",
          labelKey: "botRealmTargeting.targets.ragusa"
        },
        branches: [
          { values: [1, 2], next: "papalStates" },
          { values: [3, 4, 5, 6], next: "venice" }
        ]
      },

      ownerBosnia: {
        target: {
          type: "ownerOfProvince",
          labelKey: "botRealmTargeting.targets.ownerBosnia"
        },
        branches: [
          { values: [1, 2, 3], next: "realmSerbiaAlbania" },
          { values: [4, 5, 6], next: "wallachia" }
        ]
      },

      realmCorsicaSardinia: {
        target: {
          type: "realmInArea",
          labelKey: "botRealmTargeting.targets.realmCorsicaSardinia"
        },
        next: "realmAragon"
      },

      realmLanguedoc: {
        target: {
          type: "realmInArea",
          labelKey: "botRealmTargeting.targets.realmLanguedoc"
        },
        branches: [
          { values: [1, 2, 3], next: "realmCorsicaSardinia" },
          { values: [4, 5, 6], next: "realmAragon" }
        ]
      },

      realmRhineland: {
        target: {
          type: "realmInArea",
          labelKey: "botRealmTargeting.targets.realmRhineland"
        },
        next: "realmFlandersWallonia"
      },

      realmWestphalia: {
        target: {
          type: "realmInArea",
          labelKey: "botRealmTargeting.targets.realmWestphalia"
        },
        branches: [
          { values: [1, 2, 3], next: "realmFlandersWallonia" },
          { values: [4, 5, 6], next: "realmLowerSaxony" }
        ]
      },

      brandenburgPrussia: {
        target: {
          type: "realm",
          labelKey: "botRealmTargeting.targets.brandenburgPrussia"
        },
        branches: [
          { values: [1, 2, 3], next: "realmPrussia" },
          { values: [4, 5, 6], next: "realmWielkopolska" }
        ]
      },

      ownerSiena: {
        target: {
          type: "ownerOfProvince",
          labelKey: "botRealmTargeting.targets.ownerSiena"
        },
        next: "realmSicily"
      },

      ownerNapoli: {
        target: {
          type: "ownerOfProvince",
          labelKey: "botRealmTargeting.targets.ownerNapoli"
        },
        branches: [
          { values: [1, 2, 3], next: "realmSicily" },
          { values: [4, 5, 6], next: "venice" }
        ]
      },

      venice: {
        target: {
          type: "realm",
          labelKey: "botRealmTargeting.targets.venice"
        },
        branches: [
          { values: [1, 2, 3], next: "knights" },
          { values: [4, 5, 6], next: "ownerConstantinople" }
        ]
      },

      realmSerbiaAlbania: {
        target: {
          type: "realmInArea",
          labelKey: "botRealmTargeting.targets.realmSerbiaAlbania",
          requiresEasternEuropeMap: true
        },
        next: "ownerConstantinople"
      },

      wallachia: {
        target: {
          type: "realm",
          labelKey: "botRealmTargeting.targets.wallachia",
          requiresEasternEuropeMap: true
        },
        next: "ownerConstantinople"
      },

      realmAragon: {
        target: {
          type: "realmInArea",
          labelKey: "botRealmTargeting.targets.realmAragon"
        },
        next: "portugal"
      },

      realmFlandersWallonia: {
        target: {
          type: "realmInArea",
          labelKey: "botRealmTargeting.targets.realmFlandersWallonia"
        },
        next: "realmNetherlands"
      },

      realmLowerSaxony: {
        target: {
          type: "realmInArea",
          labelKey: "botRealmTargeting.targets.realmLowerSaxony"
        },
        branches: [
          { values: [1, 2], next: "realmNetherlands" },
          { values: [3, 4], next: "denmark" },
          { values: [5, 6], next: "realmPomerania" }
        ]
      },

      realmPrussia: {
        target: {
          type: "realmInArea",
          labelKey: "botRealmTargeting.targets.realmPrussia"
        },
        next: "realmPomerania"
      },

      realmWielkopolska: {
        target: {
          type: "realmInArea",
          labelKey: "botRealmTargeting.targets.realmWielkopolska"
        },
        next: "realmEstoniaLivonia"
      },

      realmSicily: {
        target: {
          type: "realmInArea",
          labelKey: "botRealmTargeting.targets.realmSicily"
        },
        next: "knights"
      },

      ownerConstantinople: {
        target: {
          type: "ownerOfProvince",
          labelKey: "botRealmTargeting.targets.ownerConstantinople",
          requiresEasternEuropeMap: true
        },
        next: "realmTranscaucasia"
      },

      realmNetherlands: {
        target: {
          type: "realmInArea",
          labelKey: "botRealmTargeting.targets.realmNetherlands"
        },
        next: "denmark"
      },

      denmark: {
        target: {
          type: "realm",
          labelKey: "botRealmTargeting.targets.denmark"
        },
        next: "sweden"
      },

      realmPomerania: {
        target: {
          type: "realmInArea",
          labelKey: "botRealmTargeting.targets.realmPomerania"
        },
        next: "sweden"
      },

      realmEstoniaLivonia: {
        target: {
          type: "realmInArea",
          labelKey: "botRealmTargeting.targets.realmEstoniaLivonia",
          requiresEasternEuropeMap: true
        },
        next: "realmPomerania"
      },

      knights: {
        target: {
          type: "realm",
          labelKey: "botRealmTargeting.targets.knights",
          requiresEasternEuropeMap: true
        },
        next: "realmTranscaucasia"
      },

      portugal: {
        target: {
          type: "realm",
          labelKey: "botRealmTargeting.targets.portugal"
        }
      },

      sweden: {
        target: {
          type: "realm",
          labelKey: "botRealmTargeting.targets.sweden"
        }
      },

      realmTranscaucasia: {
        target: {
          type: "realmInArea",
          labelKey: "botRealmTargeting.targets.realmTranscaucasia",
          requiresEasternEuropeMap: true
        }
      }
    }
  }
};