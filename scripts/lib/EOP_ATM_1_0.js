var EOP_ATM_1_0_Module_Factory = function () {
  var EOP_ATM_1_0 = {
    n: 'EOP_ATM_1_0',
    dens: 'http:\/\/earth.esa.int\/atm',
    deps: ['GML_3_1_1', 'EOP_1_0'],
    tis: [{
        ln: 'DataLayerType',
        ps: [{
            n: 'specy'
          }, {
            n: 'unit'
          }, {
            n: 'highestLocation',
            ti: 'GML_3_1_1.MeasureType'
          }, {
            n: 'lowestLocation',
            ti: 'GML_3_1_1.MeasureType'
          }, {
            n: 'algorithmName'
          }, {
            n: 'algorithmVersion'
          }]
      }, {
        ln: 'DataLayerPropertyType',
        ps: [{
            n: 'dataLayer',
            rq: true,
            col: true,
            en: 'DataLayer',
            ti: '.DataLayerType'
          }]
      }, {
        ln: 'EarthObservationResultType',
        bti: 'EOP_1_0.EarthObservationResultType',
        ps: [{
            n: 'dataLayers',
            ti: '.DataLayerPropertyType'
          }]
      }, {
        ln: 'EarthObservationType',
        bti: 'EOP_1_0.EarthObservationType'
      }],
    eis: [{
        en: 'EarthObservationResult',
        ti: '.EarthObservationResultType',
        sh: {
          lp: 'EarthObservationResult',
          ns: 'http:\/\/earth.esa.int\/eop'
        }
      }, {
        en: 'EarthObservation',
        ti: '.EarthObservationType',
        sh: {
          lp: 'EarthObservation',
          ns: 'http:\/\/earth.esa.int\/eop'
        }
      }, {
        en: 'DataLayer',
        ti: '.DataLayerType'
      }, {
        en: 'dataLayers',
        ti: '.DataLayerPropertyType'
      }]
  };
  return {
    EOP_ATM_1_0: EOP_ATM_1_0
  };
};
if (typeof define === 'function' && define.amd) {
  define([], EOP_ATM_1_0_Module_Factory);
}
else {
  var EOP_ATM_1_0_Module = EOP_ATM_1_0_Module_Factory();
  if (typeof module !== 'undefined' && module.exports) {
    module.exports.EOP_ATM_1_0 = EOP_ATM_1_0_Module.EOP_ATM_1_0;
  }
  else {
    var EOP_ATM_1_0 = EOP_ATM_1_0_Module.EOP_ATM_1_0;
  }
}