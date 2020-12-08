const mongoose = require('mongoose')

const materialSchema = new mongoose.Schema({
    Materialcompositions: {
        type: String
      },
      main_element: {
        type: String
      },
      Trg: {
        type: Number
      },
      Density_composition_average: {
        type: Number
      },
      IsBoron_composition_average: {
        type: Number
      },
      IsDBlock_composition_average: {
        type: Number
      },
      IsTransitionMetal_composition_average: {
        type: Number
      },
      NdValence_composition_average: {
        type: Number
      },
      NValance_composition_average: {
        type: Number
      },
      HeatVaporization_max_value: {
        type: Number
      },
      BoilingT_difference: {
        type: Number
      },
      HeatVaporization_difference: {
        type: Number
      },
      MeltingT_difference: {
        type: Number
      },
      NdValence_difference: {
        type: Number
      },
      NsUnfilled_difference: {
        type: Number
      },
      valence_difference: {
        type: Number
      },
      Site1_Density: {
        type: Number
      },
      Site1_HeatCapacityMass: {
        type: Number
      },
      Site1_HeatFusion: {
        type: Number
      },
      Site1_IsDBlock: {
        type: Number
      },
      Site1_IsTransitionMetal: {
        type: Number
      },
      Site1_NdValence: {
        type: Number
      },
      Site1_SpecificHeatCapacity: {
        type: Number
      }
    })


module.exports=mongoose.model('material',materialSchema)