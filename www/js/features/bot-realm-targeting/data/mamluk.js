export const MAMLUK_TARGETING = {
  id: "mamluk",
  military: {
    startNode: "root",
    nodes: {
      root: {
        branches: [
          {
            values: [1, 2],
            next: "tunis"
          },
          {
            values: [3],
            next: "cyprus"
          },
          {
            values: [4, 5],
            next: "realmKurdistan"
          },
          {
            values: [6],
            next: "yemen"
          }
        ]
      },
      tunis: {
        target: {
          type: "realm",
          labelKey: "botRealmTargeting.targets.tunis"
        },
        branches: [
          {
            values: [1, 2, 3],
            next: "realmAlgiers"
          },
          {
            values: [4],
            next: "realmSicily"
          },
          {
            values: [5, 6],
            next: "cyprus"
          }
        ]
      },
      realmAlgiers: {
        target: {
          type: "realmInArea",
          labelKey: "botRealmTargeting.targets.realmAlgiers"
        },
        next: "morocco"
      },
      morocco: {
        target: {
          type: "realm",
          labelKey: "botRealmTargeting.targets.morocco"
        },
        next: "realmAndalucia"
      },
      realmAndalucia: {
        target: {
          type: "realmInArea",
          labelKey: "botRealmTargeting.targets.realmAndalucia"
        },
        next: "ownerTimbuktu"
      },
      ownerTimbuktu: {
        target: {
          type: "ownerOfProvince",
          labelKey: "botRealmTargeting.targets.ownerTimbuktu"
        }
      },
      realmSicily: {
        target: {
          type: "realmInArea",
          labelKey: "botRealmTargeting.targets.realmSicily"
        },
        branches: [
          {
            values: [1, 2],
            next: "realmAndalucia"
          },
          {
            values: [3],
            next: "realmCorsicaSardinia"
          },
          {
            values: [4, 5, 6],
            next: "realmNaples"
          }
        ]
      },
      realmCorsicaSardinia: {
        target: {
          type: "realmInArea",
          labelKey: "botRealmTargeting.targets.realmCorsicaSardinia"
        }
      },
      realmNaples: {
        target: {
          type: "realmInArea",
          labelKey: "botRealmTargeting.targets.realmNaples"
        },
        next: "ownerRoma"
      },
      ownerRoma: {
        target: {
          type: "ownerOfProvince",
          labelKey: "botRealmTargeting.targets.ownerRoma"
        }
      },
      cyprus: {
        target: {
          type: "realm",
          labelKey: "botRealmTargeting.targets.cyprus"
        },
        branches: [
          {
            values: [1, 2],
            next: "ownerCreta"
          },
          {
            values: [3, 4],
            next: "knights"
          },
          {
            values: [5, 6],
            next: "realmKaraman"
          }
        ]
      },
      ownerCreta: {
        target: {
          type: "ownerOfProvince",
          labelKey: "botRealmTargeting.targets.ownerCreta"
        },
        branches: [
          {
            values: [1, 2, 3],
            next: "realmSicily"
          },
          {
            values: [4, 5, 6],
            next: "venice"
          }
        ]
      },
      knights: {
        target: {
          type: "realm",
          labelKey: "botRealmTargeting.targets.knights"
        },
        next: "venice"
      },
      venice: {
        target: {
          type: "realm",
          labelKey: "botRealmTargeting.targets.venice"
        },
        branches: [
          {
            values: [1, 2, 3],
            next: "realmNaples"
          },
          {
            values: [4, 5, 6],
            next: "ownerConstantinople"
          }
        ]
      },
      ownerConstantinople: {
        target: {
          type: "ownerOfProvince",
          labelKey: "botRealmTargeting.targets.ownerConstantinople"
        },
        next: "ownerRoma"
      },
      realmKurdistan: {
        target: {
          type: "realmInArea",
          labelKey: "botRealmTargeting.targets.realmKurdistan"
        },
        branches: [
          {
            values: [1, 2, 3],
            next: "realmKaraman"
          },
          {
            values: [4],
            next: "realmIraq"
          },
          {
            values: [5, 6],
            next: "yemen"
          }
        ]
      },
      realmKaraman: {
        target: {
          type: "realmInArea",
          labelKey: "botRealmTargeting.targets.realmKaraman"
        },
        branches: [
          {
            values: [1, 2, 3],
            next: "realmRum"
          },
          {
            values: [4, 5, 6],
            next: "ownerConstantinople"
          }
        ]
      },
      realmRum: {
        target: {
          type: "realmInArea",
          labelKey: "botRealmTargeting.targets.realmRum"
        },
        next: "ownerRoma"
      },
      realmIraq: {
        target: {
          type: "realmInArea",
          labelKey: "botRealmTargeting.targets.realmIraq"
        },
        next: "realmTranscaucasia"
      },
      realmTranscaucasia: {
        target: {
          type: "realmInArea",
          labelKey: "botRealmTargeting.targets.realmTranscaucasia"
        },
        branches: [
          {
            values: [1, 2, 3],
            next: "realmCircassia"
          },
          {
            values: [4, 5, 6],
            next: "ownerIsfahan"
          }
        ]
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
        }
      },
      ownerIsfahan: {
        target: {
          type: "ownerOfProvince",
          labelKey: "botRealmTargeting.targets.ownerIsfahan"
        },
        next: "ownerFars"
      },
      ownerFars: {
        target: {
          type: "ownerOfProvince",
          labelKey: "botRealmTargeting.targets.ownerFars"
        },
        next: "hormuz"
      },
      hormuz: {
        target: {
          type: "realm",
          labelKey: "botRealmTargeting.targets.hormuz"
        },
        next: "madagascar"
      },
      madagascar: {
        target: {
          type: "realm",
          labelKey: "botRealmTargeting.targets.madagascar"
        },
        next: "kilwa"
      },
      kilwa: {
        target: {
          type: "realm",
          labelKey: "botRealmTargeting.targets.kilwa"
        }
      },
      yemen: {
        target: {
          type: "realm",
          labelKey: "botRealmTargeting.targets.yemen"
        },
        branches: [
          {
            values: [1, 2],
            next: "realmIraq"
          },
          {
            values: [3, 4],
            next: "najd"
          },
          {
            values: [5, 6],
            next: "adal"
          }
        ]
      },
      najd: {
        target: {
          type: "realm",
          labelKey: "botRealmTargeting.targets.najd"
        },
        next: "basra"
      },
      basra: {
        target: {
          type: "realm",
          labelKey: "botRealmTargeting.targets.basra"
        },
        next: "ownerFars"
      },
      adal: {
        target: {
          type: "realm",
          labelKey: "botRealmTargeting.targets.adal"
        },
        next: "ethiopia"
      },
      ethiopia: {
        target: {
          type: "realm",
          labelKey: "botRealmTargeting.targets.ethiopia"
        },
        next: "ajuuraan"
      },
      ajuuraan: {
        target: {
          type: "realm",
          labelKey: "botRealmTargeting.targets.ajuuraan"
        },
        next: "kilwa"
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
            next: "realmTranscaucasia"
          },
          {
            values: [2],
            next: "realmKurdistan"
          },
          {
            values: [3, 4, 5],
            next: "realmKaraman"
          },
          {
            values: [6],
            next: "cyprus"
          }
        ]
      },
      realmTranscaucasia: {
        target: {
          type: "realmInArea",
          labelKey: "botRealmTargeting.targets.realmTranscaucasia"
        },
        branches: [
          {
            values: [1, 2, 3],
            next: "realmCircassia"
          },
          {
            values: [4, 5, 6],
            next: "realmRum"
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
            next: "greatHorde"
          },
          {
            values: [4, 5, 6],
            next: "shirvan"
          }
        ]
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
        }
      },
      shirvan: {
        target: {
          type: "realm",
          labelKey: "botRealmTargeting.targets.shirvan"
        },
        next: "greatHorde"
      },
      realmKurdistan: {
        target: {
          type: "realmInArea",
          labelKey: "botRealmTargeting.targets.realmKurdistan"
        },
        branches: [
          {
            values: [1, 2],
            next: "realmTranscaucasia"
          },
          {
            values: [3, 4],
            next: "realmRum"
          },
          {
            values: [5, 6],
            next: "realmNorthernAnatolia"
          }
        ]
      },
      realmRum: {
        target: {
          type: "realmInArea",
          labelKey: "botRealmTargeting.targets.realmRum"
        },
        branches: [
          {
            values: [1, 2, 3],
            next: "shirvan"
          },
          {
            values: [4, 5, 6],
            next: "realmNorthernAnatolia"
          }
        ]
      },
      realmKaraman: {
        target: {
          type: "realmInArea",
          labelKey: "botRealmTargeting.targets.realmKaraman"
        },
        branches: [
          {
            values: [1, 2],
            next: "realmKurdistan"
          },
          {
            values: [3],
            next: "realmRum"
          },
          {
            values: [4],
            next: "realmNorthernAnatolia"
          },
          {
            values: [5],
            next: "tunis"
          },
          {
            values: [6],
            next: "cyprus"
          }
        ]
      },
      realmNorthernAnatolia: {
        target: {
          type: "realmInArea",
          labelKey: "botRealmTargeting.targets.realmNorthernAnatolia"
        },
        branches: [
          {
            values: [1, 2, 3],
            next: "crimea"
          },
          {
            values: [4, 5, 6],
            next: "tlemcen"
          }
        ]
      },
      crimea: {
        target: {
          type: "realm",
          labelKey: "botRealmTargeting.targets.crimea"
        },
        next: "genoa"
      },
      genoa: {
        target: {
          type: "realm",
          labelKey: "botRealmTargeting.targets.genoa"
        }
      },
      tlemcen: {
        target: {
          type: "realm",
          labelKey: "botRealmTargeting.targets.tlemcen"
        },
        next: "ownerQafsah"
      },
      ownerQafsah: {
        target: {
          type: "ownerOfProvince",
          labelKey: "botRealmTargeting.targets.ownerQafsah"
        }
      },
      tunis: {
        target: {
          type: "realm",
          labelKey: "botRealmTargeting.targets.tunis"
        },
        branches: [
          {
            values: [1, 2, 3],
            next: "tlemcen"
          },
          {
            values: [4, 5, 6],
            next: "morocco"
          }
        ]
      },
      morocco: {
        target: {
          type: "realm",
          labelKey: "botRealmTargeting.targets.morocco"
        },
        next: "granada"
      },
      granada: {
        target: {
          type: "realm",
          labelKey: "botRealmTargeting.targets.granada"
        }
      },
      cyprus: {
        target: {
          type: "realm",
          labelKey: "botRealmTargeting.targets.cyprus"
        },
        branches: [
          {
            values: [1, 2, 3],
            next: "tunis"
          },
          {
            values: [4, 5, 6],
            next: "venice"
          }
        ]
      },
      venice: {
        target: {
          type: "realm",
          labelKey: "botRealmTargeting.targets.venice"
        },
        next: "byzantium"
      },
      byzantium: {
        target: {
          type: "realm",
          labelKey: "botRealmTargeting.targets.byzantium"
        },
        next: "knights"
      },
      knights: {
        target: {
          type: "realm",
          labelKey: "botRealmTargeting.targets.knights"
        }
      }
    }
  }
};
