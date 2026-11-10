export const MUSCOVY_RUSSIA_TARGETING = {
  id: "muscovyRussia",
  military: {
    startNode: "root",
    nodes: {
      root: {
        branches: [
          {
            values: [1, 2],
            next: "ownerNeva"
          },
          {
            values: [3, 4, 5],
            next: "realmMuscowRyazan"
          },
          {
            values: [6],
            next: "ownerKazan"
          }
        ]
      },
      ownerNeva: {
        target: {
          type: "ownerOfProvince",
          labelKey: "botRealmTargeting.targets.ownerNeva"
        },
        branches: [
          {
            values: [1],
            next: "ownerNyland"
          },
          {
            values: [2],
            next: "realmEstoniaLivonia"
          },
          {
            values: [3],
            next: "ownerNovgorod"
          },
          {
            values: [4],
            next: "ownerSmolenskas"
          },
          {
            values: [5, 6],
            next: "ownerKazan"
          }
        ]
      },
      realmMuscowRyazan: {
        target: {
          type: "realmInArea",
          labelKey: "botRealmTargeting.targets.realmMuscowRyazan"
        },
        branches: [
          {
            values: [1, 2],
            next: "ownerNovgorod"
          },
          {
            values: [3],
            next: "ownerSmolenskas"
          },
          {
            values: [4],
            next: "ownerTambov"
          },
          {
            values: [5, 6],
            next: "ownerKazan"
          }
        ]
      },
      ownerNyland: {
        target: {
          type: "ownerOfProvince",
          labelKey: "botRealmTargeting.targets.ownerNyland"
        },
        branches: [
          {
            values: [1, 2, 3, 4],
            next: "ownerOsterbotten"
          },
          {
            values: [5, 6],
            next: "ownerGotland"
          }
        ]
      },
      ownerOsterbotten: {
        target: {
          type: "ownerOfProvince",
          labelKey: "botRealmTargeting.targets.ownerOsterbotten"
        },
        next: "sweden"
      },
      realmEstoniaLivonia: {
        target: {
          type: "realmInArea",
          labelKey: "botRealmTargeting.targets.realmEstoniaLivonia"
        },
        branches: [
          {
            values: [1, 2],
            next: "ownerNyland"
          },
          {
            values: [3],
            next: "ownerGotland"
          },
          {
            values: [4, 5, 6],
            next: "ownerVilnius"
          }
        ]
      },
      ownerNovgorod: {
        target: {
          type: "ownerOfProvince",
          labelKey: "botRealmTargeting.targets.ownerNovgorod"
        },
        branches: [
          {
            values: [1, 2, 3],
            next: "realmEstoniaLivonia"
          },
          {
            values: [4],
            next: "ownerGotland"
          },
          {
            values: [5, 6],
            next: "ownerVilnius"
          }
        ]
      },
      ownerSmolenskas: {
        target: {
          type: "ownerOfProvince",
          labelKey: "botRealmTargeting.targets.ownerSmolenskas"
        },
        branches: [
          {
            values: [1, 2],
            next: "ownerNovgorod"
          },
          {
            values: [3],
            next: "ownerVilnius"
          },
          {
            values: [4, 5],
            next: "ownerKijevas"
          },
          {
            values: [6],
            next: "ownerTambov"
          }
        ]
      },
      ownerGotland: {
        target: {
          type: "ownerOfProvince",
          labelKey: "botRealmTargeting.targets.ownerGotland"
        },
        branches: [
          {
            values: [1, 2],
            next: "sweden"
          },
          {
            values: [3, 4],
            next: "denmark"
          },
          {
            values: [5, 6],
            next: "ownerKonigsberg"
          }
        ]
      },
      sweden: {
        target: {
          type: "realm",
          labelKey: "botRealmTargeting.targets.sweden"
        },
        next: "denmark"
      },
      denmark: {
        target: {
          type: "realm",
          labelKey: "botRealmTargeting.targets.denmark"
        },
        next: "brandenburgPrussia"
      },
      ownerKonigsberg: {
        target: {
          type: "ownerOfProvince",
          labelKey: "botRealmTargeting.targets.ownerKonigsberg"
        },
        next: "brandenburgPrussia"
      },
      brandenburgPrussia: {
        target: {
          type: "realm",
          labelKey: "botRealmTargeting.targets.brandenburgPrussia"
        }
      },
      ownerVilnius: {
        target: {
          type: "ownerOfProvince",
          labelKey: "botRealmTargeting.targets.ownerVilnius"
        },
        branches: [
          {
            values: [1, 2],
            next: "ownerKonigsberg"
          },
          {
            values: [3, 4],
            next: "poland"
          },
          {
            values: [5, 6],
            next: "ownerBasarabia"
          }
        ]
      },
      ownerKijevas: {
        target: {
          type: "ownerOfProvince",
          labelKey: "botRealmTargeting.targets.ownerKijevas"
        },
        branches: [
          {
            values: [1, 2, 3],
            next: "ownerVilnius"
          },
          {
            values: [4],
            next: "realmCrimea"
          },
          {
            values: [5, 6],
            next: "wallachia"
          }
        ]
      },
      poland: {
        target: {
          type: "realm",
          labelKey: "botRealmTargeting.targets.poland"
        },
        branches: [
          {
            values: [1, 2],
            next: "austria"
          },
          {
            values: [3, 4],
            next: "ownerTorda"
          },
          {
            values: [5, 6],
            next: "wallachia"
          }
        ]
      },
      ownerBasarabia: {
        target: {
          type: "ownerOfProvince",
          labelKey: "botRealmTargeting.targets.ownerBasarabia"
        },
        branches: [
          {
            values: [1, 2],
            next: "poland"
          },
          {
            values: [3, 4],
            next: "ownerTorda"
          },
          {
            values: [5, 6],
            next: "wallachia"
          }
        ]
      },
      austria: {
        target: {
          type: "realm",
          labelKey: "botRealmTargeting.targets.austria"
        }
      },
      ownerTorda: {
        target: {
          type: "ownerOfProvince",
          labelKey: "botRealmTargeting.targets.ownerTorda"
        },
        next: "austria"
      },
      wallachia: {
        target: {
          type: "realm",
          labelKey: "botRealmTargeting.targets.wallachia"
        },
        branches: [
          {
            values: [1, 2, 3],
            next: "ownerTorda"
          },
          {
            values: [4, 5, 6],
            next: "ottomans"
          }
        ]
      },
      ownerKazan: {
        target: {
          type: "ownerOfProvince",
          labelKey: "botRealmTargeting.targets.ownerKazan"
        },
        branches: [
          {
            values: [1, 2, 3],
            next: "ownerTambov"
          },
          {
            values: [4, 5],
            next: "ownerAstrakhan"
          },
          {
            values: [6],
            next: "ownerNogai"
          }
        ]
      },
      ownerTambov: {
        target: {
          type: "ownerOfProvince",
          labelKey: "botRealmTargeting.targets.ownerTambov"
        },
        branches: [
          {
            values: [1, 2],
            next: "ownerKijevas"
          },
          {
            values: [3, 4],
            next: "realmCrimea"
          },
          {
            values: [5, 6],
            next: "ownerAzov"
          }
        ]
      },
      ownerAstrakhan: {
        target: {
          type: "ownerOfProvince",
          labelKey: "botRealmTargeting.targets.ownerAstrakhan"
        },
        branches: [
          {
            values: [1, 2],
            next: "ownerAzov"
          },
          {
            values: [3, 4],
            next: "ownerShirvan"
          },
          {
            values: [5, 6],
            next: "ownerNogai"
          }
        ]
      },
      ownerAzov: {
        target: {
          type: "ownerOfProvince",
          labelKey: "botRealmTargeting.targets.ownerAzov"
        },
        branches: [
          {
            values: [1, 2],
            next: "realmCrimea"
          },
          {
            values: [3, 4],
            next: "realmCircassia"
          },
          {
            values: [5, 6],
            next: "ownerShirvan"
          }
        ]
      },
      ownerShirvan: {
        target: {
          type: "ownerOfProvince",
          labelKey: "botRealmTargeting.targets.ownerShirvan"
        },
        branches: [
          {
            values: [1, 2],
            next: "realmCircassia"
          },
          {
            values: [3],
            next: "realmTranscaucasia"
          },
          {
            values: [4, 5, 6],
            next: "ownerNogai"
          }
        ]
      },
      ownerNogai: {
        target: {
          type: "ownerOfProvince",
          labelKey: "botRealmTargeting.targets.ownerNogai"
        },
        branches: [
          {
            values: [1, 2, 3, 4],
            next: "ownerTyumen"
          },
          {
            values: [5, 6],
            next: "ownerKhiva"
          }
        ]
      },
      ownerKhiva: {
        target: {
          type: "ownerOfProvince",
          labelKey: "botRealmTargeting.targets.ownerKhiva"
        },
        next: "ownerTyumen"
      },
      ownerTyumen: {
        target: {
          type: "ownerOfProvince",
          labelKey: "botRealmTargeting.targets.ownerTyumen"
        },
        next: "ownerOirat"
      },
      ownerOirat: {
        target: {
          type: "ownerOfProvince",
          labelKey: "botRealmTargeting.targets.ownerOirat"
        },
        next: "mongolia"
      },
      mongolia: {
        target: {
          type: "realm",
          labelKey: "botRealmTargeting.targets.mongolia"
        },
        next: "ownerFurdan"
      },
      ownerFurdan: {
        target: {
          type: "ownerOfProvince",
          labelKey: "botRealmTargeting.targets.ownerFurdan"
        }
      },
      realmCrimea: {
        target: {
          type: "realmInArea",
          labelKey: "botRealmTargeting.targets.realmCrimea"
        },
        branches: [
          {
            values: [1, 2, 3],
            next: "ownerBasarabia"
          },
          {
            values: [4, 5, 6],
            next: "ottomans"
          }
        ]
      },
      realmCircassia: {
        target: {
          type: "realmInArea",
          labelKey: "botRealmTargeting.targets.realmCircassia"
        },
        branches: [
          {
            values: [1, 2, 3],
            next: "ottomans"
          },
          {
            values: [4, 5, 6],
            next: "realmTranscaucasia"
          }
        ]
      },
      realmTranscaucasia: {
        target: {
          type: "realmInArea",
          labelKey: "botRealmTargeting.targets.realmTranscaucasia"
        },
        next: "ottomans"
      },
      ottomans: {
        target: {
          type: "realm",
          labelKey: "botRealmTargeting.targets.ottomans"
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
            next: "realmNovgorod"
          },
          {
            values: [2, 3],
            next: "realmVologda"
          },
          {
            values: [4, 5],
            next: "realmCentralRussia"
          },
          {
            values: [6],
            next: "realmPerm"
          }
        ]
      },
      realmNovgorod: {
        target: {
          type: "realmInArea",
          labelKey: "botRealmTargeting.targets.realmNovgorod"
        },
        branches: [
          {
            values: [1, 2],
            next: "ownerRiga"
          },
          {
            values: [3, 4],
            next: "realmKarelia"
          },
          {
            values: [5, 6],
            next: "realmLithuania"
          }
        ]
      },
      realmVologda: {
        target: {
          type: "realmInArea",
          labelKey: "botRealmTargeting.targets.realmVologda"
        },
        branches: [
          {
            values: [1, 2],
            next: "realmNovgorod"
          },
          {
            values: [3, 4],
            next: "realmKarelia"
          },
          {
            values: [5, 6],
            next: "realmLithuania"
          }
        ]
      },
      realmCentralRussia: {
        target: {
          type: "realmInArea",
          labelKey: "botRealmTargeting.targets.realmCentralRussia"
        },
        branches: [
          {
            values: [1, 2, 3],
            next: "realmMuscowRyazan"
          },
          {
            values: [4],
            next: "realmAstrakhan"
          },
          {
            values: [5, 6],
            next: "realmPerm"
          }
        ]
      },
      realmPerm: {
        target: {
          type: "realmInArea",
          labelKey: "botRealmTargeting.targets.realmPerm"
        },
        branches: [
          {
            values: [1, 2, 3],
            next: "realmMuscowRyazan"
          },
          {
            values: [4, 5, 6],
            next: "ownerKazan"
          }
        ]
      },
      ownerRiga: {
        target: {
          type: "ownerOfProvince",
          labelKey: "botRealmTargeting.targets.ownerRiga"
        },
        branches: [
          {
            values: [1, 2, 3],
            next: "denmark"
          },
          {
            values: [4, 5, 6],
            next: "sweden"
          }
        ]
      },
      realmKarelia: {
        target: {
          type: "realmInArea",
          labelKey: "botRealmTargeting.targets.realmKarelia"
        },
        branches: [
          {
            values: [1, 2],
            next: "ownerRiga"
          },
          {
            values: [3, 4],
            next: "sweden"
          },
          {
            values: [5, 6],
            next: "realmLithuania"
          }
        ]
      },
      realmLithuania: {
        target: {
          type: "realmInArea",
          labelKey: "botRealmTargeting.targets.realmLithuania"
        },
        branches: [
          {
            values: [1, 2],
            next: "sweden"
          },
          {
            values: [3],
            next: "ownerStettin"
          },
          {
            values: [4],
            next: "wallachia"
          },
          {
            values: [5, 6],
            next: "moldavia"
          }
        ]
      },
      denmark: {
        target: {
          type: "realm",
          labelKey: "botRealmTargeting.targets.denmark"
        },
        branches: [
          {
            values: [1],
            next: "ownerAkershus"
          },
          {
            values: [2, 3],
            next: "ownerStettin"
          },
          {
            values: [4, 5, 6],
            next: "realmPrussia"
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
            values: [1],
            next: "denmark"
          },
          {
            values: [2, 3],
            next: "ownerStettin"
          },
          {
            values: [4, 5, 6],
            next: "realmPrussia"
          }
        ]
      },
      ownerAkershus: {
        target: {
          type: "ownerOfProvince",
          labelKey: "botRealmTargeting.targets.ownerAkershus"
        }
      },
      ownerStettin: {
        target: {
          type: "ownerOfProvince",
          labelKey: "botRealmTargeting.targets.ownerStettin"
        },
        next: "brandenburgPrussia"
      },
      realmPrussia: {
        target: {
          type: "realmInArea",
          labelKey: "botRealmTargeting.targets.realmPrussia"
        },
        branches: [
          {
            values: [1, 2, 3],
            next: "ownerStettin"
          },
          {
            values: [4, 5, 6],
            next: "brandenburgPrussia"
          }
        ]
      },
      brandenburgPrussia: {
        target: {
          type: "realm",
          labelKey: "botRealmTargeting.targets.brandenburgPrussia"
        },
        next: "bohemia"
      },
      bohemia: {
        target: {
          type: "realm",
          labelKey: "botRealmTargeting.targets.bohemia"
        }
      },
      wallachia: {
        target: {
          type: "realm",
          labelKey: "botRealmTargeting.targets.wallachia"
        },
        branches: [
          {
            values: [1, 2, 3],
            next: "realmTransylvania"
          },
          {
            values: [4, 5, 6],
            next: "ownerKosovo"
          }
        ]
      },
      moldavia: {
        target: {
          type: "realm",
          labelKey: "botRealmTargeting.targets.moldavia"
        },
        branches: [
          {
            values: [1, 2],
            next: "wallachia"
          },
          {
            values: [3, 4],
            next: "realmTransylvania"
          },
          {
            values: [5, 6],
            next: "ownerKosovo"
          }
        ]
      },
      realmTransylvania: {
        target: {
          type: "realmInArea",
          labelKey: "botRealmTargeting.targets.realmTransylvania"
        },
        branches: [
          {
            values: [1, 2, 3],
            next: "bohemia"
          },
          {
            values: [4, 5, 6],
            next: "ownerKosovo"
          }
        ]
      },
      ownerKosovo: {
        target: {
          type: "ownerOfProvince",
          labelKey: "botRealmTargeting.targets.ownerKosovo"
        },
        next: "ownerCyprus"
      },
      realmMuscowRyazan: {
        target: {
          type: "realmInArea",
          labelKey: "botRealmTargeting.targets.realmMuscowRyazan"
        },
        branches: [
          {
            values: [1],
            next: "realmLithuania"
          },
          {
            values: [2],
            next: "ownerKosovo"
          },
          {
            values: [3, 4],
            next: "ownerConstantinople"
          },
          {
            values: [5],
            next: "realmCrimea"
          },
          {
            values: [6],
            next: "realmAstrakhan"
          }
        ]
      },
      realmAstrakhan: {
        target: {
          type: "realmInArea",
          labelKey: "botRealmTargeting.targets.realmAstrakhan"
        },
        branches: [
          {
            values: [1, 2],
            next: "realmTranscaucasia"
          },
          {
            values: [3, 4],
            next: "realmCrimea"
          },
          {
            values: [5, 6],
            next: "realmCircassia"
          }
        ]
      },
      ownerKazan: {
        target: {
          type: "ownerOfProvince",
          labelKey: "botRealmTargeting.targets.ownerKazan"
        },
        branches: [
          {
            values: [1, 2, 3],
            next: "realmCrimea"
          },
          {
            values: [4, 5, 6],
            next: "realmCircassia"
          }
        ]
      },
      ownerConstantinople: {
        target: {
          type: "ownerOfProvince",
          labelKey: "botRealmTargeting.targets.ownerConstantinople"
        },
        branches: [
          {
            values: [1, 2, 3, 4],
            next: "ownerCyprus"
          },
          {
            values: [5, 6],
            next: "realmRum"
          }
        ]
      },
      ownerCyprus: {
        target: {
          type: "ownerOfProvince",
          labelKey: "botRealmTargeting.targets.ownerCyprus"
        }
      },
      realmCrimea: {
        target: {
          type: "realmInArea",
          labelKey: "botRealmTargeting.targets.realmCrimea"
        },
        branches: [
          {
            values: [1, 2, 3],
            next: "realmRum"
          },
          {
            values: [4],
            next: "realmTranscaucasia"
          },
          {
            values: [5, 6],
            next: "realmCircassia"
          }
        ]
      },
      realmCircassia: {
        target: {
          type: "realmInArea",
          labelKey: "botRealmTargeting.targets.realmCircassia"
        },
        branches: [
          {
            values: [1, 2, 3],
            next: "realmRum"
          },
          {
            values: [4, 5, 6],
            next: "realmTranscaucasia"
          }
        ]
      },
      realmRum: {
        target: {
          type: "realmInArea",
          labelKey: "botRealmTargeting.targets.realmRum"
        },
        next: "realmTranscaucasia"
      },
      realmTranscaucasia: {
        target: {
          type: "realmInArea",
          labelKey: "botRealmTargeting.targets.realmTranscaucasia"
        }
      }
    }
  }
};
