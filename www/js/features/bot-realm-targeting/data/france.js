export const FRANCE_TARGETING = {
  id: "france",
  military: {
    startNode: "root",
    nodes: {
      root: {
        branches: [
          {
            values: [1, 2, 3],
            next: "realmAquitaine"
          },
          {
            values: [4, 5],
            next: "realmBrittanyNormandy"
          },
          {
            values: [6],
            next: "ownerBourgogne"
          }
        ]
      },
      realmAquitaine: {
        target: {
          type: "realmInArea",
          labelKey: "botRealmTargeting.targets.realmAquitaine"
        },
        branches: [
          {
            values: [1, 2],
            next: "england"
          },
          {
            values: [3],
            next: "ownerBarcelona"
          },
          {
            values: [4, 5, 6],
            next: "realmBrittanyNormandy"
          }
        ]
      },
      england: {
        target: {
          type: "realm",
          labelKey: "botRealmTargeting.targets.england"
        },
        branches: [
          {
            values: [1, 2],
            next: "ownerCanada"
          },
          {
            values: [3, 4],
            next: "ownerNavarra"
          },
          {
            values: [5, 6],
            next: "realmLanguedoc"
          }
        ]
      },
      ownerCanada: {
        target: {
          type: "ownerOfProvince",
          labelKey: "botRealmTargeting.targets.ownerCanada"
        },
        branches: [
          {
            values: [1, 2],
            next: "ownerCoromandel"
          },
          {
            values: [3, 4],
            next: "ownerGreatLakes"
          },
          {
            values: [5, 6],
            next: "ownerGuyana"
          }
        ]
      },
      ownerCoromandel: {
        target: {
          type: "ownerOfProvince",
          labelKey: "botRealmTargeting.targets.ownerCoromandel"
        },
        next: "ownerDeccan"
      },
      ownerDeccan: {
        target: {
          type: "ownerOfProvince",
          labelKey: "botRealmTargeting.targets.ownerDeccan"
        }
      },
      ownerGreatLakes: {
        target: {
          type: "ownerOfProvince",
          labelKey: "botRealmTargeting.targets.ownerGreatLakes"
        },
        next: "ownerMississippi"
      },
      ownerMississippi: {
        target: {
          type: "ownerOfProvince",
          labelKey: "botRealmTargeting.targets.ownerMississippi"
        }
      },
      ownerGuyana: {
        target: {
          type: "ownerOfProvince",
          labelKey: "botRealmTargeting.targets.ownerGuyana"
        },
        next: "ownerAntilles"
      },
      ownerAntilles: {
        target: {
          type: "ownerOfProvince",
          labelKey: "botRealmTargeting.targets.ownerAntilles"
        }
      },
      ownerNavarra: {
        target: {
          type: "ownerOfProvince",
          labelKey: "botRealmTargeting.targets.ownerNavarra"
        },
        branches: [
          {
            values: [1, 2, 3],
            next: "ownerGuyana"
          },
          {
            values: [4, 5, 6],
            next: "castileSpain"
          }
        ]
      },
      realmLanguedoc: {
        target: {
          type: "realmInArea",
          labelKey: "botRealmTargeting.targets.realmLanguedoc"
        },
        branches: [
          {
            values: [1],
            next: "ownerGuyana"
          },
          {
            values: [2],
            next: "ownerBarcelona"
          },
          {
            values: [3, 4],
            next: "castileSpain"
          },
          {
            values: [5],
            next: "savoy"
          },
          {
            values: [6],
            next: "realmBrittanyNormandy"
          }
        ]
      },
      ownerBarcelona: {
        target: {
          type: "ownerOfProvince",
          labelKey: "botRealmTargeting.targets.ownerBarcelona"
        },
        branches: [
          {
            values: [1, 2],
            next: "castileSpain"
          },
          {
            values: [3],
            next: "ownerCorsica"
          },
          {
            values: [4],
            next: "ownerSiena"
          },
          {
            values: [5],
            next: "ownerSardinya"
          },
          {
            values: [6],
            next: "realmLanguedoc"
          }
        ]
      },
      castileSpain: {
        target: {
          type: "realm",
          labelKey: "botRealmTargeting.targets.castileSpain"
        },
        branches: [
          {
            values: [1, 2],
            next: "ownerAntilles"
          },
          {
            values: [3, 4],
            next: "realmAlgiers"
          },
          {
            values: [5, 6],
            next: "tunis"
          }
        ]
      },
      realmAlgiers: {
        target: {
          type: "realmInArea",
          labelKey: "botRealmTargeting.targets.realmAlgiers"
        },
        next: "tunis"
      },
      tunis: {
        target: {
          type: "realm",
          labelKey: "botRealmTargeting.targets.tunis"
        },
        next: "ownerAlexandria"
      },
      ownerAlexandria: {
        target: {
          type: "ownerOfProvince",
          labelKey: "botRealmTargeting.targets.ownerAlexandria"
        }
      },
      realmBrittanyNormandy: {
        target: {
          type: "realmInArea",
          labelKey: "botRealmTargeting.targets.realmBrittanyNormandy"
        },
        branches: [
          {
            values: [1],
            next: "ownerCanada"
          },
          {
            values: [2],
            next: "realmLanguedoc"
          },
          {
            values: [3],
            next: "savoy"
          },
          {
            values: [4],
            next: "realmLombardy"
          },
          {
            values: [5, 6],
            next: "ownerBourgogne"
          }
        ]
      },
      savoy: {
        target: {
          type: "realm",
          labelKey: "botRealmTargeting.targets.savoy"
        },
        branches: [
          {
            values: [1, 2],
            next: "genoa"
          },
          {
            values: [3],
            next: "ownerNapoli"
          },
          {
            values: [4, 5, 6],
            next: "realmLombardy"
          }
        ]
      },
      genoa: {
        target: {
          type: "realm",
          labelKey: "botRealmTargeting.targets.genoa"
        },
        branches: [
          {
            values: [1, 2, 3],
            next: "ownerCorsica"
          },
          {
            values: [4, 5],
            next: "ownerFirenze"
          },
          {
            values: [6],
            next: "papalStates"
          }
        ]
      },
      ownerCorsica: {
        target: {
          type: "ownerOfProvince",
          labelKey: "botRealmTargeting.targets.ownerCorsica"
        },
        branches: [
          {
            values: [1],
            next: "ownerAlexandria"
          },
          {
            values: [2, 3, 4],
            next: "ownerFirenze"
          },
          {
            values: [5, 6],
            next: "ownerSardinya"
          }
        ]
      },
      ownerFirenze: {
        target: {
          type: "ownerOfProvince",
          labelKey: "botRealmTargeting.targets.ownerFirenze"
        },
        branches: [
          {
            values: [1, 2],
            next: "ownerSiena"
          },
          {
            values: [3, 4],
            next: "ownerSardinya"
          },
          {
            values: [5, 6],
            next: "papalStates"
          }
        ]
      },
      ownerSiena: {
        target: {
          type: "ownerOfProvince",
          labelKey: "botRealmTargeting.targets.ownerSiena"
        },
        next: "ownerSardinya"
      },
      ownerSardinya: {
        target: {
          type: "ownerOfProvince",
          labelKey: "botRealmTargeting.targets.ownerSardinya"
        }
      },
      ownerNapoli: {
        target: {
          type: "ownerOfProvince",
          labelKey: "botRealmTargeting.targets.ownerNapoli"
        },
        branches: [
          {
            values: [1, 2, 3],
            next: "papalStates"
          },
          {
            values: [4, 5],
            next: "realmSicily"
          },
          {
            values: [6],
            next: "realmLombardy"
          }
        ]
      },
      papalStates: {
        target: {
          type: "realm",
          labelKey: "botRealmTargeting.targets.papalStates"
        },
        branches: [
          {
            values: [1, 2, 3],
            next: "realmSicily"
          },
          {
            values: [4, 5, 6],
            next: "realmBavaria"
          }
        ]
      },
      realmSicily: {
        target: {
          type: "realmInArea",
          labelKey: "botRealmTargeting.targets.realmSicily"
        }
      },
      realmLombardy: {
        target: {
          type: "realmInArea",
          labelKey: "botRealmTargeting.targets.realmLombardy"
        },
        branches: [
          {
            values: [1, 2],
            next: "ownerNapoli"
          },
          {
            values: [3],
            next: "papalStates"
          },
          {
            values: [4],
            next: "realmBavaria"
          },
          {
            values: [5, 6],
            next: "lorraine"
          }
        ]
      },
      ownerBourgogne: {
        target: {
          type: "ownerOfProvince",
          labelKey: "botRealmTargeting.targets.ownerBourgogne"
        },
        branches: [
          {
            values: [1, 2],
            next: "realmLombardy"
          },
          {
            values: [3],
            next: "realmLombardy"
          },
          {
            values: [4],
            next: "lorraine"
          },
          {
            values: [5, 6],
            next: "realmSeine"
          }
        ]
      },
      lorraine: {
        target: {
          type: "realm",
          labelKey: "botRealmTargeting.targets.lorraine"
        },
        branches: [
          {
            values: [1, 2],
            next: "austria"
          },
          {
            values: [3, 4],
            next: "switzerland"
          },
          {
            values: [5, 6],
            next: "realmSeine"
          }
        ]
      },
      austria: {
        target: {
          type: "realm",
          labelKey: "botRealmTargeting.targets.austria"
        },
        branches: [
          {
            values: [1, 2, 3],
            next: "venice"
          },
          {
            values: [4, 5, 6],
            next: "realmBavaria"
          }
        ]
      },
      switzerland: {
        target: {
          type: "realm",
          labelKey: "botRealmTargeting.targets.switzerland"
        }
      },
      venice: {
        target: {
          type: "realm",
          labelKey: "botRealmTargeting.targets.venice"
        },
        branches: [
          {
            values: [1, 2],
            next: "realmSicily"
          },
          {
            values: [3, 4, 5, 6],
            next: "realmBavaria"
          }
        ]
      },
      realmBavaria: {
        target: {
          type: "realmInArea",
          labelKey: "botRealmTargeting.targets.realmBavaria"
        },
        branches: [
          {
            values: [1, 2, 3],
            next: "saxony"
          },
          {
            values: [4, 5, 6],
            next: "brandenburgPrussia"
          }
        ]
      },
      saxony: {
        target: {
          type: "realm",
          labelKey: "botRealmTargeting.targets.saxony"
        },
        next: "brandenburgPrussia"
      },
      brandenburgPrussia: {
        target: {
          type: "realm",
          labelKey: "botRealmTargeting.targets.brandenburgPrussia"
        },
        next: "denmark"
      },
      denmark: {
        target: {
          type: "realm",
          labelKey: "botRealmTargeting.targets.denmark"
        }
      },
      realmSeine: {
        target: {
          type: "realmInArea",
          labelKey: "botRealmTargeting.targets.realmSeine"
        },
        branches: [
          {
            values: [1, 2, 3],
            next: "ownerBrugge"
          },
          {
            values: [4, 5, 6],
            next: "ownerAntwerpen"
          }
        ]
      },
      ownerBrugge: {
        target: {
          type: "ownerOfProvince",
          labelKey: "botRealmTargeting.targets.ownerBrugge"
        },
        next: "realmNetherlands"
      },
      ownerAntwerpen: {
        target: {
          type: "ownerOfProvince",
          labelKey: "botRealmTargeting.targets.ownerAntwerpen"
        },
        next: "realmNetherlands"
      },
      realmNetherlands: {
        target: {
          type: "realmInArea",
          labelKey: "botRealmTargeting.targets.realmNetherlands"
        }
      }
    }
  },
  diplomatic: {
    startNode: "root",
    nodes: {
      root: {
        branches: [
          {
            values: [1],
            next: "scotland"
          },
          {
            values: [2, 3, 4],
            next: "realmLanguedoc"
          },
          {
            values: [5],
            next: "realmBrittanyNormandy"
          },
          {
            values: [6],
            next: "realmBurgundy"
          }
        ]
      },
      scotland: {
        target: {
          type: "realm",
          labelKey: "botRealmTargeting.targets.scotland"
        },
        branches: [
          {
            values: [1],
            next: "realmIreland"
          },
          {
            values: [2],
            next: "realmAragon"
          },
          {
            values: [3, 4],
            next: "realmLanguedoc"
          },
          {
            values: [5, 6],
            next: "realmLanguedoc"
          }
        ]
      },
      realmIreland: {
        target: {
          type: "realmInArea",
          labelKey: "botRealmTargeting.targets.realmIreland"
        },
        next: "portugal"
      },
      realmAragon: {
        target: {
          type: "realmInArea",
          labelKey: "botRealmTargeting.targets.realmAragon"
        },
        branches: [
          {
            values: [1, 2],
            next: "ownerNapoli"
          },
          {
            values: [3, 4],
            next: "ownerNapoli"
          },
          {
            values: [5, 6],
            next: "portugal"
          }
        ]
      },
      ownerNapoli: {
        target: {
          type: "ownerOfProvince",
          labelKey: "botRealmTargeting.targets.ownerNapoli"
        },
        branches: [
          {
            values: [1],
            next: "ownerFirenze"
          },
          {
            values: [2, 3],
            next: "ownerFirenze"
          },
          {
            values: [4, 5, 6],
            next: "realmLombardy"
          }
        ]
      },
      portugal: {
        target: {
          type: "realm",
          labelKey: "botRealmTargeting.targets.portugal"
        },
        branches: [
          {
            values: [1, 2, 3],
            next: "realmAlgiers"
          },
          {
            values: [4, 5, 6],
            next: "realmSicily"
          }
        ]
      },
      realmAlgiers: {
        target: {
          type: "realmInArea",
          labelKey: "botRealmTargeting.targets.realmAlgiers"
        }
      },
      realmSicily: {
        target: {
          type: "realmInArea",
          labelKey: "botRealmTargeting.targets.realmSicily"
        }
      },
      realmLanguedoc: {
        target: {
          type: "realmInArea",
          labelKey: "botRealmTargeting.targets.realmLanguedoc"
        },
        branches: [
          {
            values: [1],
            next: "ownerMilano"
          },
          {
            values: [2, 3],
            next: "ownerMilano"
          },
          {
            values: [4],
            next: "savoy"
          },
          {
            values: [5, 6],
            next: "realmBrittanyNormandy"
          }
        ]
      },
      ownerMilano: {
        target: {
          type: "ownerOfProvince",
          labelKey: "botRealmTargeting.targets.ownerMilano"
        },
        branches: [
          {
            values: [1],
            next: "ownerFirenze"
          },
          {
            values: [2, 3],
            next: "ownerFirenze"
          },
          {
            values: [4, 5],
            next: "genoa"
          },
          {
            values: [6],
            next: "realmLombardy"
          }
        ]
      },
      genoa: {
        target: {
          type: "realm",
          labelKey: "botRealmTargeting.targets.genoa"
        },
        branches: [
          {
            values: [1, 2, 3],
            next: "ownerFirenze"
          },
          {
            values: [4, 5],
            next: "realmLombardy"
          },
          {
            values: [6],
            next: "switzerland"
          }
        ]
      },
      ownerFirenze: {
        target: {
          type: "ownerOfProvince",
          labelKey: "botRealmTargeting.targets.ownerFirenze"
        },
        next: "papalStates"
      },
      papalStates: {
        target: {
          type: "realm",
          labelKey: "botRealmTargeting.targets.papalStates"
        }
      },
      realmBrittanyNormandy: {
        target: {
          type: "realmInArea",
          labelKey: "botRealmTargeting.targets.realmBrittanyNormandy"
        },
        branches: [
          {
            values: [1, 2],
            next: "savoy"
          },
          {
            values: [3, 4],
            next: "lorraine"
          },
          {
            values: [5, 6],
            next: "realmBurgundy"
          }
        ]
      },
      savoy: {
        target: {
          type: "realm",
          labelKey: "botRealmTargeting.targets.savoy"
        },
        branches: [
          {
            values: [1, 2],
            next: "genoa"
          },
          {
            values: [3, 4],
            next: "switzerland"
          },
          {
            values: [5],
            next: "realmLombardy"
          },
          {
            values: [6],
            next: "bavaria"
          }
        ]
      },
      switzerland: {
        target: {
          type: "realm",
          labelKey: "botRealmTargeting.targets.switzerland"
        },
        branches: [
          {
            values: [1, 2],
            next: "realmLombardy"
          },
          {
            values: [3, 4],
            next: "venice"
          },
          {
            values: [5, 6],
            next: "bavaria"
          }
        ]
      },
      venice: {
        target: {
          type: "realm",
          labelKey: "botRealmTargeting.targets.venice"
        },
        branches: [
          {
            values: [1, 2, 3],
            next: "realmDalmatia"
          },
          {
            values: [4, 5, 6],
            next: "realmHungarianPlain"
          }
        ]
      },
      realmDalmatia: {
        target: {
          type: "realmInArea",
          labelKey: "botRealmTargeting.targets.realmDalmatia"
        }
      },
      realmHungarianPlain: {
        target: {
          type: "realmInArea",
          labelKey: "botRealmTargeting.targets.realmHungarianPlain"
        }
      },
      realmLombardy: {
        target: {
          type: "realmInArea",
          labelKey: "botRealmTargeting.targets.realmLombardy"
        }
      },
      lorraine: {
        target: {
          type: "realm",
          labelKey: "botRealmTargeting.targets.lorraine"
        },
        branches: [
          {
            values: [1, 2],
            next: "realmLombardy"
          },
          {
            values: [3, 4, 5],
            next: "bavaria"
          },
          {
            values: [6],
            next: "realmFlandersWallonia"
          }
        ]
      },
      bavaria: {
        target: {
          type: "realm",
          labelKey: "botRealmTargeting.targets.bavaria"
        },
        branches: [
          {
            values: [1, 2, 3],
            next: "bohemia"
          },
          {
            values: [4, 5],
            next: "saxony"
          },
          {
            values: [6],
            next: "realmBavariaSwabia"
          }
        ]
      },
      bohemia: {
        target: {
          type: "realm",
          labelKey: "botRealmTargeting.targets.bohemia"
        }
      },
      saxony: {
        target: {
          type: "realm",
          labelKey: "botRealmTargeting.targets.saxony"
        },
        next: "brandenburgPrussia"
      },
      realmBavariaSwabia: {
        target: {
          type: "realmInArea",
          labelKey: "botRealmTargeting.targets.realmBavariaSwabia"
        }
      },
      realmBurgundy: {
        target: {
          type: "realmInArea",
          labelKey: "botRealmTargeting.targets.realmBurgundy"
        },
        branches: [
          {
            values: [1, 2, 3],
            next: "realmFlandersWallonia"
          },
          {
            values: [4, 5],
            next: "realmNetherlands"
          },
          {
            values: [6],
            next: "realmNetherlands"
          }
        ]
      },
      realmFlandersWallonia: {
        target: {
          type: "realmInArea",
          labelKey: "botRealmTargeting.targets.realmFlandersWallonia"
        },
        branches: [
          {
            values: [1, 2, 3, 4],
            next: "realmRhineland"
          },
          {
            values: [5, 6],
            next: "realmWestphalia"
          }
        ]
      },
      realmNetherlands: {
        target: {
          type: "realmInArea",
          labelKey: "botRealmTargeting.targets.realmNetherlands"
        },
        branches: [
          {
            values: [1, 2, 3],
            next: "realmWestphalia"
          },
          {
            values: [4],
            next: "realmLowerSaxony"
          },
          {
            values: [5, 6],
            next: "denmark"
          }
        ]
      },
      realmRhineland: {
        target: {
          type: "realmInArea",
          labelKey: "botRealmTargeting.targets.realmRhineland"
        },
        branches: [
          {
            values: [1, 2, 3],
            next: "brandenburgPrussia"
          },
          {
            values: [4, 5, 6],
            next: "realmWielkopolska"
          }
        ]
      },
      realmWestphalia: {
        target: {
          type: "realmInArea",
          labelKey: "botRealmTargeting.targets.realmWestphalia"
        }
      },
      realmLowerSaxony: {
        target: {
          type: "realmInArea",
          labelKey: "botRealmTargeting.targets.realmLowerSaxony"
        },
        next: "sweden"
      },
      denmark: {
        target: {
          type: "realm",
          labelKey: "botRealmTargeting.targets.denmark"
        },
        branches: [
          {
            values: [1, 2, 3],
            next: "realmLowerSaxony"
          },
          {
            values: [4, 5, 6],
            next: "sweden"
          }
        ]
      },
      sweden: {
        target: {
          type: "realm",
          labelKey: "botRealmTargeting.targets.sweden"
        },
        branches: [
          {
            values: [1, 2, 3],
            next: "realmWielkopolska"
          },
          {
            values: [4, 5, 6],
            next: "realmPrussia"
          }
        ]
      },
      realmWielkopolska: {
        target: {
          type: "realmInArea",
          labelKey: "botRealmTargeting.targets.realmWielkopolska"
        }
      },
      realmPrussia: {
        target: {
          type: "realmInArea",
          labelKey: "botRealmTargeting.targets.realmPrussia"
        }
      },
      brandenburgPrussia: {
        target: {
          type: "realm",
          labelKey: "botRealmTargeting.targets.brandenburgPrussia"
        }
      }
    }
  }
};
