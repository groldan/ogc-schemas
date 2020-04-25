var GML_LROV_3_3_Module_Factory = function () {
  var GML_LROV_3_3 = {
    n: 'GML_LROV_3_3',
    dens: 'http:\/\/www.opengis.net\/gml\/3.3\/lrov',
    dans: 'http:\/\/www.w3.org\/1999\/xlink',
    deps: ['GML_LRO_3_3', 'GML_3_2', 'GML_LR_3_3', 'XLink_1_0'],
    tis: [{
        ln: 'VectorOffsetLinearSRSType',
        bti: 'GML_LR_3_3.LinearSRSType',
        ps: [{
            n: 'rest',
            rq: true,
            mno: 3,
            mxo: 5,
            col: true,
            mx: false,
            dom: false,
            etis: [{
                en: 'linearElement',
                ti: 'GML_LR_3_3.LinearElementPropertyType'
              }, {
                en: 'offsetVector',
                ti: '.VectorType'
              }, {
                en: 'lrm',
                ti: 'GML_LRO_3_3.LRMWithOffsetPropertyType'
              }],
            t: 'ers'
          }]
      }, {
        ln: 'VectorType',
        bti: 'GML_3_2.VectorType',
        ps: [{
            n: 'offsetUom',
            an: {
              lp: 'offsetUom'
            },
            t: 'a'
          }]
      }, {
        ln: 'VectorOffsetExpressionType',
        ps: [{
            n: 'offsetVector',
            rq: true,
            ti: 'GML_3_2.VectorType'
          }]
      }, {
        ln: 'VectorOffsetDistanceExpressionType',
        bti: 'GML_LR_3_3.DistanceExpressionType',
        ps: [{
            n: 'vectorOffsetExpression',
            ti: '.VectorOffsetExpressionType'
          }]
      }, {
        ln: 'VectorOffsetLinearSRSPropertyType',
        ps: [{
            n: 'vectorOffsetLinearSRS',
            rq: true,
            en: 'VectorOffsetLinearSRS',
            ti: '.VectorOffsetLinearSRSType'
          }, {
            n: 'nilReason',
            ti: {
              t: 'l'
            },
            an: {
              lp: 'nilReason'
            },
            t: 'a'
          }, {
            n: 'remoteSchema',
            an: {
              lp: 'remoteSchema',
              ns: 'http:\/\/www.opengis.net\/gml\/3.2'
            },
            t: 'a'
          }, {
            n: 'type',
            ti: 'XLink_1_0.TypeType',
            t: 'a'
          }, {
            n: 'href',
            t: 'a'
          }, {
            n: 'role',
            t: 'a'
          }, {
            n: 'arcrole',
            t: 'a'
          }, {
            n: 'title',
            t: 'a'
          }, {
            n: 'show',
            ti: 'XLink_1_0.ShowType',
            t: 'a'
          }, {
            n: 'actuate',
            ti: 'XLink_1_0.ActuateType',
            t: 'a'
          }]
      }],
    eis: [{
        en: 'offsetVector',
        ti: '.VectorType',
        sc: '.VectorOffsetLinearSRSType'
      }, {
        en: 'VectorOffsetLinearSRS',
        ti: '.VectorOffsetLinearSRSType',
        sh: {
          lp: 'LinearSRS',
          ns: 'http:\/\/www.opengis.net\/gml\/3.3\/lr'
        }
      }, {
        en: 'VectorOffsetDistanceExpression',
        ti: '.VectorOffsetDistanceExpressionType',
        sh: {
          lp: 'DistanceExpression',
          ns: 'http:\/\/www.opengis.net\/gml\/3.3\/lr'
        }
      }, {
        en: 'linearElement',
        ti: 'GML_LR_3_3.LinearElementPropertyType',
        sc: '.VectorOffsetLinearSRSType'
      }, {
        en: 'lrm',
        ti: 'GML_LRO_3_3.LRMWithOffsetPropertyType',
        sc: '.VectorOffsetLinearSRSType'
      }]
  };
  return {
    GML_LROV_3_3: GML_LROV_3_3
  };
};
if (typeof define === 'function' && define.amd) {
  define([], GML_LROV_3_3_Module_Factory);
}
else {
  var GML_LROV_3_3_Module = GML_LROV_3_3_Module_Factory();
  if (typeof module !== 'undefined' && module.exports) {
    module.exports.GML_LROV_3_3 = GML_LROV_3_3_Module.GML_LROV_3_3;
  }
  else {
    var GML_LROV_3_3 = GML_LROV_3_3_Module.GML_LROV_3_3;
  }
}