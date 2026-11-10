export const POLAND_TARGETING = {
  id: "poland",
  military: {
    startNode: "root",
    nodes: {
      root: {
        branches: [
          {
            values: [1],
            next: "ownerSilesia"
          },
          {
            values: [2, 3, 4],
            next: "realmPrussia"
          },
          {
            values: [5],
            next: "realmRedRuthenia"
          },
          {
            values: [6],
            next: "realmCrimea"
          }
        ]
      },
      ownerSilesia: {
        target: {
          type: "ownerOfProvince",
          labelKey: "botRealmTargeting.targets.ownerSilesia"
        },
        branches: [
          {
            values: [1, 2, 3],
            next: "realmPomerania"
          },
          {
            values: [4, 5, 6],
            next: "bohemia"
          }
        ]
      },
      realmPrussia: {
        target: {
          type: "realmInArea",
          labelKey: "botRealmTargeting.targets.realmPrussia"
        },
        branches: [
          {
            values: [1],
            next: "ownerSilesia"
          },
          {
            values: [2],
            next: "realmPomerania"
          },
          {
            values: [3],
            next: "bohemia"
          },
          {
            values: [4, 5],
            next: "realmEstoniaLivonia"
          },
          {
            values: [6],
            next: "realmMoldavia"
          }
        ]
      },
      realmEstoniaLivonia: {
        target: {
          type: "realmInArea",
          labelKey: "botRealmTargeting.targets.realmEstoniaLivonia"
        },
        branches: [
          {
            values: [1, 2],
            next: "realmTransylvania"
          },
          {
            values: [3, 4],
            next: "realmKarelia"
          },
          {
            values: [5, 6],
            next: "realmNovgorod"
          }
        ]
      },
      realmRedRuthenia: {
        target: {
          type: "realmInArea",
          labelKey: "botRealmTargeting.targets.realmRedRuthenia"
        },
        branches: [
          {
            values: [1, 2],
            next: "realmMoldavia"
          },
          {
            values: [3, 4],
            next: "realmWhiteRuthenia"
          },
          {
            values: [5, 6],
            next: "realmCrimea"
          }
        ]
      },
      realmCrimea: {
        target: {
          type: "realmInArea",
          labelKey: "botRealmTargeting.targets.realmCrimea"
        },
        branches: [
          {
            values: [1, 2, 3],
            next: "realmWesternUkraine"
          },
          {
            values: [4],
            next: "realmWesternUkraine"
          },
          {
            values: [5, 6],
            next: "realmEasternUkraine"
          }
        ]
      },
      realmPomerania: {
        target: {
          type: "realmInArea",
          labelKey: "botRealmTargeting.targets.realmPomerania"
        },
        branches: [
          {
            values: [1, 2],
            next: "brandenburgPrussia"
          },
          {
            values: [3, 4],
            next: "ownerGotland"
          },
          {
            values: [5, 6],
            next: "bohemia"
          }
        ]
      },
      brandenburgPrussia: {
        target: {
          type: "realm",
          labelKey: "botRealmTargeting.targets.brandenburgPrussia"
        },
        branches: [
          {
            values: [1, 2, 3, 4],
            next: "saxony"
          },
          {
            values: [5, 6],
            next: "denmark"
          }
        ]
      },
      saxony: {
        target: {
          type: "realm",
          labelKey: "botRealmTargeting.targets.saxony"
        },
        next: "bavaria"
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
      bavaria: {
        target: {
          type: "realm",
          labelKey: "botRealmTargeting.targets.bavaria"
        }
      },
      ownerGotland: {
        target: {
          type: "ownerOfProvince",
          labelKey: "botRealmTargeting.targets.ownerGotland"
        },
        next: "sweden"
      },
      bohemia: {
        target: {
          type: "realm",
          labelKey: "botRealmTargeting.targets.bohemia"
        },
        branches: [
          {
            values: [1, 2],
            next: "realmRoyalHungary"
          },
          {
            values: [3, 4],
            next: "realmTransylvania"
          },
          {
            values: [5, 6],
            next: "realmMoldavia"
          }
        ]
      },
      realmRoyalHungary: {
        target: {
          type: "realmInArea",
          labelKey: "botRealmTargeting.targets.realmRoyalHungary"
        },
        branches: [
          {
            values: [1, 2, 3],
            next: "austria"
          },
          {
            values: [4, 5],
            next: "ownerPest"
          },
          {
            values: [6],
            next: "realmWallachiaBulgaria"
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
            next: "ownerPest"
          },
          {
            values: [4, 5, 6],
            next: "realmWallachiaBulgaria"
          }
        ]
      },
      ownerPest: {
        target: {
          type: "ownerOfProvince",
          labelKey: "botRealmTargeting.targets.ownerPest"
        }
      },
      realmTransylvania: {
        target: {
          type: "realmInArea",
          labelKey: "botRealmTargeting.targets.realmTransylvania"
        },
        branches: [
          {
            values: [1, 2],
            next: "realmWallachiaBulgaria"
          },
          {
            values: [3, 4, 5, 6],
            next: "realmWallachiaBulgaria"
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
            next: "realmTransylvania"
          },
          {
            values: [3, 4],
            next: "realmKarelia"
          },
          {
            values: [5, 6],
            next: "realmWallachiaBulgaria"
          }
        ]
      },
      realmWallachiaBulgaria: {
        target: {
          type: "realmInArea",
          labelKey: "botRealmTargeting.targets.realmWallachiaBulgaria"
        },
        branches: [
          {
            values: [1, 2],
            next: "realmCroatiaBosnia"
          },
          {
            values: [3],
            next: "realmDalmatia"
          },
          {
            values: [4],
            next: "realmSerbiaAlbania"
          },
          {
            values: [5, 6],
            next: "ownerConstantinople"
          }
        ]
      },
      realmCroatiaBosnia: {
        target: {
          type: "realmInArea",
          labelKey: "botRealmTargeting.targets.realmCroatiaBosnia"
        },
        next: "realmDalmatia"
      },
      realmDalmatia: {
        target: {
          type: "realmInArea",
          labelKey: "botRealmTargeting.targets.realmDalmatia"
        },
        next: "realmSerbiaAlbania"
      },
      realmSerbiaAlbania: {
        target: {
          type: "realmInArea",
          labelKey: "botRealmTargeting.targets.realmSerbiaAlbania"
        },
        next: "ownerConstantinople"
      },
      ownerConstantinople: {
        target: {
          type: "ownerOfProvince",
          labelKey: "botRealmTargeting.targets.ownerConstantinople"
        }
      },
      realmKarelia: {
        target: {
          type: "realmInArea",
          labelKey: "botRealmTargeting.targets.realmKarelia"
        }
      },
      realmWhiteRuthenia: {
        target: {
          type: "realmInArea",
          labelKey: "botRealmTargeting.targets.realmWhiteRuthenia"
        },
        branches: [
          {
            values: [1, 2, 3],
            next: "realmNovgorod"
          },
          {
            values: [4, 5, 6],
            next: "ownerOdoyev"
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
            next: "muscovyRussia"
          },
          {
            values: [3, 4],
            next: "ownerRyazan"
          },
          {
            values: [5, 6],
            next: "ownerOdoyev"
          }
        ]
      },
      ownerOdoyev: {
        target: {
          type: "ownerOfProvince",
          labelKey: "botRealmTargeting.targets.ownerOdoyev"
        },
        branches: [
          {
            values: [1],
            next: "muscovyRussia"
          },
          {
            values: [2, 3],
            next: "ownerRyazan"
          },
          {
            values: [4, 5],
            next: "ownerTver"
          },
          {
            values: [6],
            next: "realmSaratov"
          }
        ]
      },
      muscovyRussia: {
        target: {
          type: "realm",
          labelKey: "botRealmTargeting.targets.muscovyRussia"
        },
        next: "ownerRyazan"
      },
      ownerRyazan: {
        target: {
          type: "ownerOfProvince",
          labelKey: "botRealmTargeting.targets.ownerRyazan"
        },
        next: "ownerTver"
      },
      ownerTver: {
        target: {
          type: "ownerOfProvince",
          labelKey: "botRealmTargeting.targets.ownerTver"
        }
      },
      realmWesternUkraine: {
        target: {
          type: "realmInArea",
          labelKey: "botRealmTargeting.targets.realmWesternUkraine"
        },
        branches: [
          {
            values: [1, 2, 3],
            next: "ownerOdoyev"
          },
          {
            values: [4, 5, 6],
            next: "realmSaratov"
          }
        ]
      },
      realmEasternUkraine: {
        target: {
          type: "realmInArea",
          labelKey: "botRealmTargeting.targets.realmEasternUkraine"
        },
        branches: [
          {
            values: [1, 2, 3],
            next: "ownerOdoyev"
          },
          {
            values: [4, 5, 6],
            next: "realmSaratov"
          }
        ]
      },
      realmSaratov: {
        target: {
          type: "realmInArea",
          labelKey: "botRealmTargeting.targets.realmSaratov"
        },
        next: "realmCircassia"
      },
      realmCircassia: {
        target: {
          type: "realmInArea",
          labelKey: "botRealmTargeting.targets.realmCircassia"
        },
        next: "ownerConstantinople"
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
            next: "ownerSilesia"
          },
          {
            values: [3],
            next: "realmMazoviaMalopolska"
          },
          {
            values: [4],
            next: "realmHungarianPlain"
          },
          {
            values: [5, 6],
            next: "realmLithuania"
          }
        ]
      },
      ownerSilesia: {
        target: {
          type: "ownerOfProvince",
          labelKey: "botRealmTargeting.targets.ownerSilesia"
        },
        branches: [
          {
            values: [1, 2],
            next: "ownerStettin"
          },
          {
            values: [3, 4],
            next: "ownerDanzig"
          },
          {
            values: [5, 6],
            next: "bohemia"
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
            values: [1],
            next: "bohemia"
          },
          {
            values: [2],
            next: "ownerDanzig"
          },
          {
            values: [3],
            next: "realmTransylvania"
          },
          {
            values: [4],
            next: "moldavia"
          },
          {
            values: [5, 6],
            next: "realmHungarianPlain"
          }
        ]
      },
      realmHungarianPlain: {
        target: {
          type: "realmInArea",
          labelKey: "botRealmTargeting.targets.realmHungarianPlain"
        },
        branches: [
          {
            values: [1, 2],
            next: "moldavia"
          },
          {
            values: [3, 4],
            next: "ownerEdisanas"
          },
          {
            values: [5, 6],
            next: "ownerEdisanas"
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
            values: [1],
            next: "ownerEdisanas"
          },
          {
            values: [2, 3],
            next: "realmEstoniaLivonia"
          },
          {
            values: [4],
            next: "realmNovgorod"
          },
          {
            values: [5, 6],
            next: "realmMuscowRyazan"
          }
        ]
      },
      ownerStettin: {
        target: {
          type: "ownerOfProvince",
          labelKey: "botRealmTargeting.targets.ownerStettin"
        },
        branches: [
          {
            values: [1],
            next: "realmPomerania"
          },
          {
            values: [2],
            next: "denmark"
          },
          {
            values: [3],
            next: "realmPrussia"
          },
          {
            values: [4],
            next: "sweden"
          },
          {
            values: [5, 6],
            next: "realmLowerSaxony"
          }
        ]
      },
      ownerDanzig: {
        target: {
          type: "ownerOfProvince",
          labelKey: "botRealmTargeting.targets.ownerDanzig"
        },
        branches: [
          {
            values: [1, 2, 3],
            next: "realmPrussia"
          },
          {
            values: [4, 5, 6],
            next: "sweden"
          }
        ]
      },
      realmPomerania: {
        target: {
          type: "realmInArea",
          labelKey: "botRealmTargeting.targets.realmPomerania"
        },
        next: "realmLowerSaxony"
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
            next: "brandenburgPrussia"
          }
        ]
      },
      realmPrussia: {
        target: {
          type: "realmInArea",
          labelKey: "botRealmTargeting.targets.realmPrussia"
        },
        branches: [
          {
            values: [1, 2, 3],
            next: "brandenburgPrussia"
          },
          {
            values: [4, 5, 6],
            next: "realmBavariaSwabia"
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
            values: [1, 2],
            next: "brandenburgPrussia"
          },
          {
            values: [3, 4],
            next: "realmBavariaSwabia"
          },
          {
            values: [5, 6],
            next: "saxony"
          }
        ]
      },
      realmLowerSaxony: {
        target: {
          type: "realmInArea",
          labelKey: "botRealmTargeting.targets.realmLowerSaxony"
        },
        next: "realmWestphalia"
      },
      realmWestphalia: {
        target: {
          type: "realmInArea",
          labelKey: "botRealmTargeting.targets.realmWestphalia"
        },
        next: "realmRhineland"
      },
      brandenburgPrussia: {
        target: {
          type: "realm",
          labelKey: "botRealmTargeting.targets.brandenburgPrussia"
        },
        branches: [
          {
            values: [1, 2],
            next: "realmRhineland"
          },
          {
            values: [3, 4],
            next: "realmBavariaSwabia"
          },
          {
            values: [5, 6],
            next: "realmBavariaSwabia"
          }
        ]
      },
      realmRhineland: {
        target: {
          type: "realmInArea",
          labelKey: "botRealmTargeting.targets.realmRhineland"
        }
      },
      realmBavariaSwabia: {
        target: {
          type: "realmInArea",
          labelKey: "botRealmTargeting.targets.realmBavariaSwabia"
        }
      },
      bohemia: {
        target: {
          type: "realm",
          labelKey: "botRealmTargeting.targets.bohemia"
        },
        next: "saxony"
      },
      saxony: {
        target: {
          type: "realm",
          labelKey: "botRealmTargeting.targets.saxony"
        },
        branches: [
          {
            values: [1, 2],
            next: "ownerZagreb"
          },
          {
            values: [3, 4],
            next: "realmCentralItaly"
          },
          {
            values: [5, 6],
            next: "realmVenetia"
          }
        ]
      },
      realmTransylvania: {
        target: {
          type: "realmInArea",
          labelKey: "botRealmTargeting.targets.realmTransylvania"
        },
        next: "wallachia"
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
            values: [4, 5, 6],
            next: "ownerEdisanas"
          }
        ]
      },
      ownerEdisanas: {
        target: {
          type: "ownerOfProvince",
          labelKey: "botRealmTargeting.targets.ownerEdisanas"
        },
        branches: [
          {
            values: [1, 2, 3],
            next: "realmCrimea"
          },
          {
            values: [4, 5, 6],
            next: "realmCrimea"
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
            next: "ownerZagreb"
          },
          {
            values: [4, 5, 6],
            next: "ownerConstantinopleChristian"
          }
        ]
      },
      ownerZagreb: {
        target: {
          type: "ownerOfProvince",
          labelKey: "botRealmTargeting.targets.ownerZagreb"
        },
        branches: [
          {
            values: [1, 2],
            next: "realmVenetia"
          },
          {
            values: [3, 4],
            next: "realmCentralItaly"
          },
          {
            values: [5, 6],
            next: "realmDalmatia"
          }
        ]
      },
      realmVenetia: {
        target: {
          type: "realmInArea",
          labelKey: "botRealmTargeting.targets.realmVenetia"
        },
        next: "realmCentralItaly"
      },
      realmCentralItaly: {
        target: {
          type: "realmInArea",
          labelKey: "botRealmTargeting.targets.realmCentralItaly"
        },
        next: "realmDalmatia"
      },
      realmDalmatia: {
        target: {
          type: "realmInArea",
          labelKey: "botRealmTargeting.targets.realmDalmatia"
        },
        next: "realmSerbiaAlbania"
      },
      ownerConstantinopleChristian: {
        target: {
          type: "special",
          labelKey: "botRealmTargeting.targets.ownerConstantinopleChristian"
        },
        next: "realmSerbiaAlbania"
      },
      realmSerbiaAlbania: {
        target: {
          type: "realmInArea",
          labelKey: "botRealmTargeting.targets.realmSerbiaAlbania"
        }
      },
      realmCrimea: {
        target: {
          type: "realmInArea",
          labelKey: "botRealmTargeting.targets.realmCrimea"
        },
        branches: [
          {
            values: [1, 2],
            next: "realmCircassia"
          },
          {
            values: [3, 4],
            next: "realmCircassia"
          },
          {
            values: [5, 6],
            next: "realmCaucasus"
          }
        ]
      },
      realmCircassia: {
        target: {
          type: "realmInArea",
          labelKey: "botRealmTargeting.targets.realmCircassia"
        },
        next: "realmTranscaucasia"
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
      realmEstoniaLivonia: {
        target: {
          type: "realmInArea",
          labelKey: "botRealmTargeting.targets.realmEstoniaLivonia"
        },
        branches: [
          {
            values: [1, 2, 3],
            next: "realmCrimea"
          },
          {
            values: [4, 5, 6],
            next: "realmNovgorod"
          }
        ]
      },
      realmNovgorod: {
        target: {
          type: "realmInArea",
          labelKey: "botRealmTargeting.targets.realmNovgorod"
        }
      },
      realmMuscowRyazan: {
        target: {
          type: "realmInArea",
          labelKey: "botRealmTargeting.targets.realmMuscowRyazan"
        },
        branches: [
          {
            values: [1],
            next: "realmCrimea"
          },
          {
            values: [2, 3, 4],
            next: "realmNovgorod"
          },
          {
            values: [5, 6],
            next: "realmAstrakhan"
          }
        ]
      },
      realmAstrakhan: {
        target: {
          type: "realmInArea",
          labelKey: "botRealmTargeting.targets.realmAstrakhan"
        },
        next: "realmCaucasus"
      }
    }
  }
};
