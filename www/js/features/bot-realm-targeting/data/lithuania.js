export const LITHUANIA_TARGETING = {
  id: "lithuania",
  military: {
    startNode: "root",
    nodes: {
      root: {
        branches: [
          {
            values: [1, 2],
            next: "crimea"
          },
          {
            values: [3],
            next: "odoyev"
          },
          {
            values: [4],
            next: "teutonicOrder"
          },
          {
            values: [5, 6],
            next: "livonianOrder"
          }
        ]
      },
      crimea: {
        target: {
          type: "realm",
          labelKey: "botRealmTargeting.targets.crimea"
        },
        branches: [
          {
            values: [1, 2],
            next: "realmMoldavia"
          },
          {
            values: [3],
            next: "greatHorde"
          },
          {
            values: [4],
            next: "ownerCaffa"
          },
          {
            values: [5, 6],
            next: "teutonicOrder"
          }
        ]
      },
      realmMoldavia: {
        target: {
          type: "realmInArea",
          labelKey: "botRealmTargeting.targets.realmMoldavia"
        },
        branches: [
          {
            values: [1, 2],
            next: "wallachia"
          },
          {
            values: [3, 4, 5, 6],
            next: "realmWesternUkraine"
          }
        ]
      },
      wallachia: {
        target: {
          type: "realm",
          labelKey: "botRealmTargeting.targets.wallachia"
        },
        next: "ownerConstantinople"
      },
      ownerConstantinople: {
        target: {
          type: "ownerOfProvince",
          labelKey: "botRealmTargeting.targets.ownerConstantinople"
        },
        next: "realmTransylvania"
      },
      realmTransylvania: {
        target: {
          type: "realmInArea",
          labelKey: "botRealmTargeting.targets.realmTransylvania"
        },
        next: "realmRoyalHungary"
      },
      realmRoyalHungary: {
        target: {
          type: "realmInArea",
          labelKey: "botRealmTargeting.targets.realmRoyalHungary"
        },
        next: "bohemia"
      },
      realmWesternUkraine: {
        target: {
          type: "realmInArea",
          labelKey: "botRealmTargeting.targets.realmWesternUkraine"
        },
        branches: [
          {
            values: [1, 2, 3, 4],
            next: "ownerWarszawa"
          },
          {
            values: [5, 6],
            next: "ownerCaffa"
          }
        ]
      },
      ownerWarszawa: {
        target: {
          type: "ownerOfProvince",
          labelKey: "botRealmTargeting.targets.ownerWarszawa"
        },
        branches: [
          {
            values: [1, 2, 3, 4],
            next: "realmTransylvania"
          },
          {
            values: [5, 6],
            next: "bohemia"
          }
        ]
      },
      bohemia: {
        target: {
          type: "realm",
          labelKey: "botRealmTargeting.targets.bohemia"
        }
      },
      greatHorde: {
        target: {
          type: "realm",
          labelKey: "botRealmTargeting.targets.greatHorde"
        },
        next: "ryazan"
      },
      odoyev: {
        target: {
          type: "realm",
          labelKey: "botRealmTargeting.targets.odoyev"
        },
        branches: [
          {
            values: [1, 2],
            next: "greatHorde"
          },
          {
            values: [3, 4, 5],
            next: "ryazan"
          },
          {
            values: [6],
            next: "tver"
          }
        ]
      },
      ryazan: {
        target: {
          type: "realm",
          labelKey: "botRealmTargeting.targets.ryazan"
        },
        next: "tver"
      },
      tver: {
        target: {
          type: "realm",
          labelKey: "botRealmTargeting.targets.tver"
        },
        next: "ownerPskov"
      },
      ownerPskov: {
        target: {
          type: "ownerOfProvince",
          labelKey: "botRealmTargeting.targets.ownerPskov"
        },
        next: "novgorod"
      },
      ownerCaffa: {
        target: {
          type: "ownerOfProvince",
          labelKey: "botRealmTargeting.targets.ownerCaffa"
        },
        next: "realmCircassia"
      },
      realmCircassia: {
        target: {
          type: "realmInArea",
          labelKey: "botRealmTargeting.targets.realmCircassia"
        },
        next: "realmCaucasus"
      },
      realmCaucasus: {
        target: {
          type: "realmInArea",
          labelKey: "botRealmTargeting.targets.realmCaucasus"
        },
        next: "realmTranscaucasia"
      },
      realmTranscaucasia: {
        target: {
          type: "realmInArea",
          labelKey: "botRealmTargeting.targets.realmTranscaucasia"
        }
      },
      teutonicOrder: {
        target: {
          type: "realm",
          labelKey: "botRealmTargeting.targets.teutonicOrder"
        },
        branches: [
          {
            values: [1],
            next: "tver"
          },
          {
            values: [2, 3],
            next: "ownerPskov"
          },
          {
            values: [4, 5, 6],
            next: "riga"
          }
        ]
      },
      livonianOrder: {
        target: {
          type: "realm",
          labelKey: "botRealmTargeting.targets.livonianOrder"
        },
        branches: [
          {
            values: [1, 2],
            next: "teutonicOrder"
          },
          {
            values: [3],
            next: "novgorod"
          },
          {
            values: [4, 5, 6],
            next: "riga"
          }
        ]
      },
      riga: {
        target: {
          type: "realm",
          labelKey: "botRealmTargeting.targets.riga"
        },
        branches: [
          {
            values: [1, 2, 3, 4],
            next: "novgorod"
          },
          {
            values: [5, 6],
            next: "ownerNeva"
          }
        ]
      },
      novgorod: {
        target: {
          type: "realm",
          labelKey: "botRealmTargeting.targets.novgorod"
        },
        branches: [
          {
            values: [1, 2, 3, 4],
            next: "muscovyRussia"
          },
          {
            values: [5, 6],
            next: "realmPomerania"
          }
        ]
      },
      muscovyRussia: {
        target: {
          type: "realm",
          labelKey: "botRealmTargeting.targets.muscovyRussia"
        },
        next: "ownerKazan"
      },
      ownerKazan: {
        target: {
          type: "ownerOfProvince",
          labelKey: "botRealmTargeting.targets.ownerKazan"
        },
        next: "realmTranscaucasia"
      },
      ownerNeva: {
        target: {
          type: "ownerOfProvince",
          labelKey: "botRealmTargeting.targets.ownerNeva"
        },
        next: "realmPomerania"
      },
      realmPomerania: {
        target: {
          type: "realmInArea",
          labelKey: "botRealmTargeting.targets.realmPomerania"
        },
        next: "sweden"
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
            values: [1, 2],
            next: "realmMazoviaMalopolska"
          },
          {
            values: [3],
            next: "riga"
          },
          {
            values: [4, 5],
            next: "novgorod"
          },
          {
            values: [6],
            next: "realmMuscowRyazan"
          }
        ]
      },
      realmMazoviaMalopolska: {
        target: {
          type: "realmInArea",
          labelKey: "botRealmTargeting.targets.realmMazoviaMalopolska"
        },
        branches: [
          {
            values: [1, 2, 3],
            next: "hungary"
          },
          {
            values: [4, 5, 6],
            next: "teutonicOrder"
          }
        ]
      },
      hungary: {
        target: {
          type: "realm",
          labelKey: "botRealmTargeting.targets.hungary"
        },
        branches: [
          {
            values: [1, 2, 3, 4],
            next: "wallachia"
          },
          {
            values: [5, 6],
            next: "bohemia"
          }
        ]
      },
      wallachia: {
        target: {
          type: "realm",
          labelKey: "botRealmTargeting.targets.wallachia"
        },
        branches: [
          {
            values: [1, 2, 3],
            next: "serbia"
          },
          {
            values: [4, 5, 6],
            next: "byzantium"
          }
        ]
      },
      serbia: {
        target: {
          type: "realm",
          labelKey: "botRealmTargeting.targets.serbia"
        },
        next: "bosnia"
      },
      bosnia: {
        target: {
          type: "realm",
          labelKey: "botRealmTargeting.targets.bosnia"
        }
      },
      bohemia: {
        target: {
          type: "realm",
          labelKey: "botRealmTargeting.targets.bohemia"
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
      riga: {
        target: {
          type: "realm",
          labelKey: "botRealmTargeting.targets.riga"
        },
        branches: [
          {
            values: [1, 2],
            next: "teutonicOrder"
          },
          {
            values: [3, 4],
            next: "livonianOrder"
          },
          {
            values: [5, 6],
            next: "novgorod"
          }
        ]
      },
      livonianOrder: {
        target: {
          type: "realm",
          labelKey: "botRealmTargeting.targets.livonianOrder"
        },
        next: "teutonicOrder"
      },
      teutonicOrder: {
        target: {
          type: "realm",
          labelKey: "botRealmTargeting.targets.teutonicOrder"
        },
        branches: [
          {
            values: [1, 2],
            next: "bohemia"
          },
          {
            values: [3, 4],
            next: "sweden"
          },
          {
            values: [5, 6],
            next: "realmPomerania"
          }
        ]
      },
      realmPomerania: {
        target: {
          type: "realmInArea",
          labelKey: "botRealmTargeting.targets.realmPomerania"
        },
        next: "sweden"
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
        }
      },
      novgorod: {
        target: {
          type: "realm",
          labelKey: "botRealmTargeting.targets.novgorod"
        },
        branches: [
          {
            values: [1, 2],
            next: "teutonicOrder"
          },
          {
            values: [3, 4],
            next: "livonianOrder"
          },
          {
            values: [5, 6],
            next: "realmMuscowRyazan"
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
            values: [1, 2, 3],
            next: "crimea"
          },
          {
            values: [4, 5, 6],
            next: "greatHorde"
          }
        ]
      },
      crimea: {
        target: {
          type: "realm",
          labelKey: "botRealmTargeting.targets.crimea"
        },
        branches: [
          {
            values: [1, 2, 3],
            next: "moldavia"
          },
          {
            values: [4, 5, 6],
            next: "realmCircassia"
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
            values: [1, 2, 3],
            next: "wallachia"
          },
          {
            values: [4, 5],
            next: "byzantium"
          },
          {
            values: [6],
            next: "trebizond"
          }
        ]
      },
      byzantium: {
        target: {
          type: "realm",
          labelKey: "botRealmTargeting.targets.byzantium"
        },
        next: "cyprus"
      },
      cyprus: {
        target: {
          type: "realm",
          labelKey: "botRealmTargeting.targets.cyprus"
        }
      },
      realmCircassia: {
        target: {
          type: "realmInArea",
          labelKey: "botRealmTargeting.targets.realmCircassia"
        },
        next: "trebizond"
      },
      trebizond: {
        target: {
          type: "realm",
          labelKey: "botRealmTargeting.targets.trebizond"
        },
        next: "qaraQoyunlu"
      },
      greatHorde: {
        target: {
          type: "realm",
          labelKey: "botRealmTargeting.targets.greatHorde"
        },
        next: "kazan"
      },
      kazan: {
        target: {
          type: "realm",
          labelKey: "botRealmTargeting.targets.kazan"
        },
        next: "nogai"
      },
      nogai: {
        target: {
          type: "realm",
          labelKey: "botRealmTargeting.targets.nogai"
        },
        next: "qaraQoyunlu"
      },
      qaraQoyunlu: {
        target: {
          type: "realm",
          labelKey: "botRealmTargeting.targets.qaraQoyunlu"
        }
      }
    }
  }
};
