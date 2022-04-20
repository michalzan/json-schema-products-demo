const schemas = [
  {
    title: "Covid schema",
    type: "object",
    properties: {
      result: {
        type: "string",
        enum: ["negative", "positive"],
      },
    },
    required: ["result"],
    dependencies: {
      result: {
        oneOf: [
          {
            properties: {
              result: {
                enum: ["negative"],
              },
            },
          },
          {
            properties: {
              result: {
                enum: ["positive"],
              },
              ctValue: {
                type: "number",
                minimum: 0,
              },
            },
            required: ["ctValue"],
          },
        ],
      },
    },
  },

  {
    title: "STDs schema",
    type: "object",
    required: [
      "chlamydiaTrachomatis",
      "ureaplasmaUrealyticum",
      "ureaplasmaParvum",
      "mycoplasmaHominis",
      "neisseriaGonorrhea",
      "trichomonasVaginalis",
      "mycoplasmaGenitalium",
    ],
    properties: {
      chlamydiaTrachomatis: {
        $ref: "#/definitions/binaryResult",
        title: "Chlamydia trachomatis",
      },
      ureaplasmaUrealyticum: {
        $ref: "#/definitions/binaryResult",
        title: "Ureaplasma urealyticum",
      },
      ureaplasmaParvum: {
        $ref: "#/definitions/binaryResult",
        title: "Ureaplasma parvum",
      },
      mycoplasmaHominis: {
        $ref: "#/definitions/binaryResult",
        title: "Mycoplasma hominis",
      },
      neisseriaGonorrhea: {
        $ref: "#/definitions/binaryResult",
        title: "Neisseria gonorrhea",
      },
      trichomonasVaginalis: {
        $ref: "#/definitions/binaryResult",
        title: "Trichomonas vaginalis",
      },
      mycoplasmaGenitalium: {
        $ref: "#/definitions/binaryResult",
        title: "Mycoplasma genitalium",
      },
    },
    definitions: {
      binaryResult: {
        type: "string",
        enum: ["negative", "positive"],
      },
    },
  },
];

export default schemas;
