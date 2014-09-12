var WFS_2_0_Module_Factory = function () {
  var WFS_2_0 = {
    n: 'WFS_2_0',
    dens: 'http:\/\/www.opengis.net\/wfs\/2.0',
    tis: [{
        ln: 'StoredQueryType',
        bti: 'Filter_2_0.AbstractQueryExpressionType',
        ps: [{
            n: 'parameter',
            col: true,
            en: 'Parameter',
            ti: 'WFS_2_0.ParameterType'
          }, {
            n: 'id',
            t: 'a'
          }]
      }, {
        ln: 'DescribeFeatureTypeType',
        bti: 'WFS_2_0.BaseRequestType',
        ps: [{
            n: 'typeName',
            col: true,
            en: 'TypeName',
            ti: 'QName'
          }, {
            n: 'outputFormat',
            t: 'a'
          }]
      }, {
        ln: 'DeleteType',
        bti: 'WFS_2_0.AbstractTransactionActionType',
        ps: [{
            n: 'filter',
            en: {
              lp: 'Filter',
              ns: 'http:\/\/www.opengis.net\/fes\/2.0'
            },
            ti: 'Filter_2_0.FilterType'
          }, {
            n: 'typeName',
            ti: 'QName',
            t: 'a'
          }]
      }, {
        ln: 'AbstractTransactionActionType',
        ps: [{
            n: 'handle',
            t: 'a'
          }]
      }, {
        ln: 'DescribeStoredQueriesResponseType',
        ps: [{
            n: 'storedQueryDescription',
            col: true,
            en: 'StoredQueryDescription',
            ti: 'WFS_2_0.StoredQueryDescriptionType'
          }]
      }, {
        ln: 'QueryType',
        bti: 'Filter_2_0.AbstractAdhocQueryExpressionType',
        ps: [{
            n: 'srsName',
            t: 'a'
          }, {
            n: 'featureVersion',
            t: 'a'
          }]
      }, {
        ln: 'ValueListType',
        ps: [{
            n: 'value',
            col: true,
            en: 'Value',
            ti: 'AnyType'
          }]
      }, {
        ln: 'ListStoredQueriesType',
        bti: 'WFS_2_0.BaseRequestType'
      }, {
        ln: 'ElementType',
        ps: [{
            n: 'metadata',
            en: {
              lp: 'Metadata',
              ns: 'http:\/\/www.opengis.net\/ows\/1.1'
            },
            ti: 'OWS_1_1_0.MetadataType'
          }, {
            n: 'valueList',
            en: 'ValueList',
            ti: 'WFS_2_0.ValueListType'
          }, {
            n: 'name',
            t: 'a'
          }, {
            n: 'type',
            ti: 'QName',
            t: 'a'
          }]
      }, {
        ln: 'LockFeatureType',
        bti: 'WFS_2_0.BaseRequestType',
        ps: [{
            n: 'abstractQueryExpression',
            col: true,
            mx: false,
            dom: false,
            typed: false,
            en: {
              lp: 'AbstractQueryExpression',
              ns: 'http:\/\/www.opengis.net\/fes\/2.0'
            },
            ti: 'Filter_2_0.AbstractQueryExpressionType',
            t: 'er'
          }, {
            n: 'lockId',
            t: 'a'
          }, {
            n: 'expiry',
            ti: 'Integer',
            t: 'a'
          }, {
            n: 'lockAction',
            t: 'a'
          }]
      }, {
        ln: 'FeatureTypeListType',
        ps: [{
            n: 'featureType',
            col: true,
            en: 'FeatureType',
            ti: 'WFS_2_0.FeatureTypeType'
          }]
      }, {
        ln: 'InsertType',
        bti: 'WFS_2_0.AbstractTransactionActionType',
        ps: [{
            n: 'any',
            col: true,
            dom: false,
            mx: false,
            t: 'ae'
          }, {
            n: 'inputFormat',
            t: 'a'
          }, {
            n: 'srsName',
            t: 'a'
          }]
      }, {
        ln: 'UpdateType',
        bti: 'WFS_2_0.AbstractTransactionActionType',
        ps: [{
            n: 'property',
            col: true,
            en: 'Property',
            ti: 'WFS_2_0.PropertyType'
          }, {
            n: 'filter',
            en: {
              lp: 'Filter',
              ns: 'http:\/\/www.opengis.net\/fes\/2.0'
            },
            ti: 'Filter_2_0.FilterType'
          }, {
            n: 'typeName',
            ti: 'QName',
            t: 'a'
          }, {
            n: 'inputFormat',
            t: 'a'
          }, {
            n: 'srsName',
            t: 'a'
          }]
      }, {
        ln: 'AdditionalValues',
        ps: [{
            n: 'valueCollection',
            en: 'ValueCollection',
            ti: 'WFS_2_0.ValueCollectionType'
          }, {
            n: 'simpleFeatureCollection',
            mx: false,
            dom: false,
            typed: false,
            en: 'SimpleFeatureCollection',
            ti: 'WFS_2_0.SimpleFeatureCollectionType',
            t: 'er'
          }]
      }, {
        ln: 'ValueCollectionType',
        ps: [{
            n: 'member',
            col: true,
            ti: 'WFS_2_0.MemberPropertyType'
          }, {
            n: 'additionalValues',
            ti: 'WFS_2_0.AdditionalValues'
          }, {
            n: 'truncatedResponse',
            ti: 'WFS_2_0.TruncatedResponse'
          }, {
            n: 'timeStamp',
            ti: 'Calendar',
            t: 'a'
          }, {
            n: 'numberMatched',
            t: 'a'
          }, {
            n: 'numberReturned',
            ti: 'Integer',
            t: 'a'
          }, {
            n: 'next',
            t: 'a'
          }, {
            n: 'previous',
            t: 'a'
          }]
      }, {
        ln: 'SimpleFeatureCollectionType',
        ps: [{
            n: 'boundedBy',
            ti: 'WFS_2_0.EnvelopePropertyType'
          }, {
            n: 'member',
            col: true,
            ti: 'WFS_2_0.MemberPropertyType'
          }]
      }, {
        ln: 'ListStoredQueriesResponseType',
        ps: [{
            n: 'storedQuery',
            col: true,
            en: 'StoredQuery',
            ti: 'WFS_2_0.StoredQueryListItemType'
          }]
      }, {
        ln: 'DropStoredQuery',
        bti: 'WFS_2_0.BaseRequestType',
        ps: [{
            n: 'id',
            t: 'a'
          }]
      }, {
        ln: 'BaseRequestType',
        ps: [{
            n: 'service',
            t: 'a'
          }, {
            n: 'version',
            t: 'a'
          }, {
            n: 'handle',
            t: 'a'
          }]
      }, {
        ln: 'NativeType',
        ps: [{
            n: 'content',
            col: true,
            t: 'ae'
          }, {
            n: 'vendorId',
            t: 'a'
          }, {
            n: 'safeToIgnore',
            ti: 'Boolean',
            t: 'a'
          }]
      }, {
        ln: 'TransactionResponseType',
        ps: [{
            n: 'transactionSummary',
            en: 'TransactionSummary',
            ti: 'WFS_2_0.TransactionSummaryType'
          }, {
            n: 'insertResults',
            en: 'InsertResults',
            ti: 'WFS_2_0.ActionResultsType'
          }, {
            n: 'updateResults',
            en: 'UpdateResults',
            ti: 'WFS_2_0.ActionResultsType'
          }, {
            n: 'replaceResults',
            en: 'ReplaceResults',
            ti: 'WFS_2_0.ActionResultsType'
          }, {
            n: 'version',
            t: 'a'
          }]
      }, {
        ln: 'GetCapabilitiesType',
        bti: 'OWS_1_1_0.GetCapabilitiesType',
        ps: [{
            n: 'service',
            t: 'a'
          }]
      }, {
        ln: 'CreateStoredQueryType',
        bti: 'WFS_2_0.BaseRequestType',
        ps: [{
            n: 'storedQueryDefinition',
            col: true,
            en: 'StoredQueryDefinition',
            ti: 'WFS_2_0.StoredQueryDescriptionType'
          }]
      }, {
        ln: 'MemberPropertyType',
        ps: [{
            n: 'content',
            col: true,
            etis: [{
                en: 'Tuple',
                ti: 'WFS_2_0.TupleType'
              }, {
                en: 'SimpleFeatureCollection',
                ti: 'WFS_2_0.SimpleFeatureCollectionType'
              }],
            t: 'ers'
          }, {
            n: 'state',
            t: 'a'
          }, {
            n: 'type',
            ti: 'XLink_1_0.TypeType',
            an: {
              lp: 'type',
              ns: 'http:\/\/www.w3.org\/1999\/xlink'
            },
            t: 'a'
          }, {
            n: 'href',
            an: {
              lp: 'href',
              ns: 'http:\/\/www.w3.org\/1999\/xlink'
            },
            t: 'a'
          }, {
            n: 'role',
            an: {
              lp: 'role',
              ns: 'http:\/\/www.w3.org\/1999\/xlink'
            },
            t: 'a'
          }, {
            n: 'arcrole',
            an: {
              lp: 'arcrole',
              ns: 'http:\/\/www.w3.org\/1999\/xlink'
            },
            t: 'a'
          }, {
            n: 'title',
            an: {
              lp: 'title',
              ns: 'http:\/\/www.w3.org\/1999\/xlink'
            },
            t: 'a'
          }, {
            n: 'show',
            ti: 'XLink_1_0.ShowType',
            an: {
              lp: 'show',
              ns: 'http:\/\/www.w3.org\/1999\/xlink'
            },
            t: 'a'
          }, {
            n: 'actuate',
            ti: 'XLink_1_0.ActuateType',
            an: {
              lp: 'actuate',
              ns: 'http:\/\/www.w3.org\/1999\/xlink'
            },
            t: 'a'
          }]
      }, {
        ln: 'GetPropertyValueType',
        bti: 'WFS_2_0.BaseRequestType',
        ps: [{
            n: 'abstractQueryExpression',
            mx: false,
            dom: false,
            typed: false,
            en: {
              lp: 'AbstractQueryExpression',
              ns: 'http:\/\/www.opengis.net\/fes\/2.0'
            },
            ti: 'Filter_2_0.AbstractQueryExpressionType',
            t: 'er'
          }, {
            n: 'valueReference',
            t: 'a'
          }, {
            n: 'resolvePath',
            t: 'a'
          }, {
            n: 'resolve',
            t: 'a'
          }, {
            n: 'resolveDepth',
            t: 'a'
          }, {
            n: 'resolveTimeout',
            ti: 'Integer',
            t: 'a'
          }, {
            n: 'startIndex',
            ti: 'Integer',
            t: 'a'
          }, {
            n: 'count',
            ti: 'Integer',
            t: 'a'
          }, {
            n: 'resultType',
            t: 'a'
          }, {
            n: 'outputFormat',
            t: 'a'
          }]
      }, {
        ln: 'PropertyType',
        ps: [{
            n: 'valueReference',
            en: 'ValueReference',
            ti: 'WFS_2_0.PropertyType.ValueReference'
          }, {
            n: 'value',
            en: 'Value',
            ti: 'AnyType'
          }]
      }, {
        ln: 'AdditionalObjects',
        ps: [{
            n: 'valueCollection',
            en: 'ValueCollection',
            ti: 'WFS_2_0.ValueCollectionType'
          }, {
            n: 'simpleFeatureCollection',
            mx: false,
            dom: false,
            typed: false,
            en: 'SimpleFeatureCollection',
            ti: 'WFS_2_0.SimpleFeatureCollectionType',
            t: 'er'
          }]
      }, {
        ln: 'DescribeStoredQueriesType',
        bti: 'WFS_2_0.BaseRequestType',
        ps: [{
            n: 'storedQueryId',
            col: true,
            en: 'StoredQueryId'
          }]
      }, {
        ln: 'GetFeatureType',
        bti: 'WFS_2_0.BaseRequestType',
        ps: [{
            n: 'abstractQueryExpression',
            col: true,
            mx: false,
            dom: false,
            typed: false,
            en: {
              lp: 'AbstractQueryExpression',
              ns: 'http:\/\/www.opengis.net\/fes\/2.0'
            },
            ti: 'Filter_2_0.AbstractQueryExpressionType',
            t: 'er'
          }, {
            n: 'startIndex',
            ti: 'Integer',
            t: 'a'
          }, {
            n: 'count',
            ti: 'Integer',
            t: 'a'
          }, {
            n: 'resultType',
            t: 'a'
          }, {
            n: 'outputFormat',
            t: 'a'
          }, {
            n: 'resolve',
            t: 'a'
          }, {
            n: 'resolveDepth',
            t: 'a'
          }, {
            n: 'resolveTimeout',
            ti: 'Integer',
            t: 'a'
          }]
      }, {
        ln: 'PropertyName',
        ps: [{
            n: 'value',
            ti: 'QName',
            t: 'v'
          }, {
            n: 'resolvePath',
            t: 'a'
          }, {
            n: 'resolve',
            t: 'a'
          }, {
            n: 'resolveDepth',
            t: 'a'
          }, {
            n: 'resolveTimeout',
            ti: 'Integer',
            t: 'a'
          }]
      }, {
        ln: 'LockFeatureResponseType',
        ps: [{
            n: 'featuresLocked',
            en: 'FeaturesLocked',
            ti: 'WFS_2_0.FeaturesLockedType'
          }, {
            n: 'featuresNotLocked',
            en: 'FeaturesNotLocked',
            ti: 'WFS_2_0.FeaturesNotLockedType'
          }, {
            n: 'lockId',
            t: 'a'
          }]
      }, {
        ln: 'ReplaceType',
        bti: 'WFS_2_0.AbstractTransactionActionType',
        ps: [{
            n: 'any',
            dom: false,
            mx: false,
            t: 'ae'
          }, {
            n: 'filter',
            en: {
              lp: 'Filter',
              ns: 'http:\/\/www.opengis.net\/fes\/2.0'
            },
            ti: 'Filter_2_0.FilterType'
          }, {
            n: 'inputFormat',
            t: 'a'
          }, {
            n: 'srsName',
            t: 'a'
          }]
      }, {
        ln: 'GetFeatureWithLockType',
        bti: 'WFS_2_0.GetFeatureType',
        ps: [{
            n: 'expiry',
            ti: 'Integer',
            t: 'a'
          }, {
            n: 'lockAction',
            t: 'a'
          }]
      }, {
        ln: 'Abstract',
        ps: [{
            n: 'value',
            t: 'v'
          }, {
            n: 'lang',
            an: {
              lp: 'lang',
              ns: 'http:\/\/www.w3.org\/XML\/1998\/namespace'
            },
            t: 'a'
          }]
      }, {
        ln: 'EnvelopePropertyType',
        ps: [{
            n: 'any',
            dom: false,
            mx: false,
            t: 'ae'
          }]
      }, {
        ln: 'WFSCapabilitiesType',
        bti: 'OWS_1_1_0.CapabilitiesBaseType',
        ps: [{
            n: 'wsdl',
            en: 'WSDL',
            ti: 'WFS_2_0.WFSCapabilitiesType.WSDL'
          }, {
            n: 'featureTypeList',
            en: 'FeatureTypeList',
            ti: 'WFS_2_0.FeatureTypeListType'
          }, {
            n: 'filterCapabilities',
            en: {
              lp: 'Filter_Capabilities',
              ns: 'http:\/\/www.opengis.net\/fes\/2.0'
            },
            ti: 'Filter_2_0.FilterCapabilities'
          }]
      }, {
        ln: 'CreateStoredQueryResponseType',
        bti: 'WFS_2_0.ExecutionStatusType'
      }, {
        ln: 'Title',
        ps: [{
            n: 'value',
            t: 'v'
          }, {
            n: 'lang',
            an: {
              lp: 'lang',
              ns: 'http:\/\/www.w3.org\/XML\/1998\/namespace'
            },
            t: 'a'
          }]
      }, {
        ln: 'TransactionType',
        bti: 'WFS_2_0.BaseRequestType',
        ps: [{
            n: 'abstractTransactionAction',
            col: true,
            mx: false,
            dom: false,
            typed: false,
            en: 'AbstractTransactionAction',
            ti: 'WFS_2_0.AbstractTransactionActionType',
            t: 'er'
          }, {
            n: 'lockId',
            t: 'a'
          }, {
            n: 'releaseAction',
            t: 'a'
          }, {
            n: 'srsName',
            t: 'a'
          }]
      }, {
        ln: 'FeatureCollectionType',
        bti: 'WFS_2_0.SimpleFeatureCollectionType',
        ps: [{
            n: 'additionalObjects',
            ti: 'WFS_2_0.AdditionalObjects'
          }, {
            n: 'truncatedResponse',
            ti: 'WFS_2_0.TruncatedResponse'
          }, {
            n: 'lockId',
            t: 'a'
          }, {
            n: 'timeStamp',
            ti: 'Calendar',
            t: 'a'
          }, {
            n: 'numberMatched',
            t: 'a'
          }, {
            n: 'numberReturned',
            ti: 'Integer',
            t: 'a'
          }, {
            n: 'next',
            t: 'a'
          }, {
            n: 'previous',
            t: 'a'
          }]
      }, {
        ln: 'ExecutionStatusType',
        ps: [{
            n: 'status',
            t: 'a'
          }]
      }, {
        ln: 'TruncatedResponse',
        ps: [{
            n: 'exceptionReport',
            en: {
              lp: 'ExceptionReport',
              ns: 'http:\/\/www.opengis.net\/ows\/1.1'
            },
            ti: 'OWS_1_1_0.ExceptionReport'
          }]
      }, {
        ln: 'TupleType',
        ps: [{
            n: 'member',
            col: true,
            ti: 'WFS_2_0.MemberPropertyType'
          }]
      }, {
        ln: 'ExtendedDescriptionType',
        ps: [{
            n: 'element',
            col: true,
            en: 'Element',
            ti: 'WFS_2_0.ElementType'
          }]
      }, {
        ln: 'StoredQueryListItemType',
        ps: [{
            n: 'title',
            col: true,
            en: 'Title',
            ti: 'WFS_2_0.Title'
          }, {
            n: 'returnFeatureType',
            col: true,
            en: 'ReturnFeatureType',
            ti: 'QName'
          }, {
            n: 'id',
            t: 'a'
          }]
      }, {
        ln: 'MetadataURLType',
        ps: [{
            n: 'about',
            t: 'a'
          }, {
            n: 'type',
            ti: 'XLink_1_0.TypeType',
            an: {
              lp: 'type',
              ns: 'http:\/\/www.w3.org\/1999\/xlink'
            },
            t: 'a'
          }, {
            n: 'href',
            an: {
              lp: 'href',
              ns: 'http:\/\/www.w3.org\/1999\/xlink'
            },
            t: 'a'
          }, {
            n: 'role',
            an: {
              lp: 'role',
              ns: 'http:\/\/www.w3.org\/1999\/xlink'
            },
            t: 'a'
          }, {
            n: 'arcrole',
            an: {
              lp: 'arcrole',
              ns: 'http:\/\/www.w3.org\/1999\/xlink'
            },
            t: 'a'
          }, {
            n: 'title',
            an: {
              lp: 'title',
              ns: 'http:\/\/www.w3.org\/1999\/xlink'
            },
            t: 'a'
          }, {
            n: 'show',
            ti: 'XLink_1_0.ShowType',
            an: {
              lp: 'show',
              ns: 'http:\/\/www.w3.org\/1999\/xlink'
            },
            t: 'a'
          }, {
            n: 'actuate',
            ti: 'XLink_1_0.ActuateType',
            an: {
              lp: 'actuate',
              ns: 'http:\/\/www.w3.org\/1999\/xlink'
            },
            t: 'a'
          }]
      }, {
        ln: 'ActionResultsType',
        ps: [{
            n: 'feature',
            col: true,
            en: 'Feature',
            ti: 'WFS_2_0.CreatedOrModifiedFeatureType'
          }]
      }, {
        ln: 'OutputFormatListType',
        ps: [{
            n: 'format',
            col: true,
            en: 'Format'
          }]
      }, {
        ln: 'CreatedOrModifiedFeatureType',
        ps: [{
            n: 'resourceId',
            col: true,
            en: {
              lp: 'ResourceId',
              ns: 'http:\/\/www.opengis.net\/fes\/2.0'
            },
            ti: 'Filter_2_0.ResourceIdType'
          }, {
            n: 'handle',
            t: 'a'
          }]
      }, {
        ln: 'ParameterExpressionType',
        ps: [{
            n: 'title',
            col: true,
            en: 'Title',
            ti: 'WFS_2_0.Title'
          }, {
            n: '_abstract',
            col: true,
            en: 'Abstract',
            ti: 'WFS_2_0.Abstract'
          }, {
            n: 'metadata',
            col: true,
            en: {
              lp: 'Metadata',
              ns: 'http:\/\/www.opengis.net\/ows\/1.1'
            },
            ti: 'OWS_1_1_0.MetadataType'
          }, {
            n: 'name',
            t: 'a'
          }, {
            n: 'type',
            ti: 'QName',
            t: 'a'
          }]
      }, {
        ln: 'FeaturesNotLockedType',
        ps: [{
            n: 'resourceId',
            col: true,
            en: {
              lp: 'ResourceId',
              ns: 'http:\/\/www.opengis.net\/fes\/2.0'
            },
            ti: 'Filter_2_0.ResourceIdType'
          }]
      }, {
        ln: 'EmptyType'
      }, {
        ln: 'FeaturesLockedType',
        ps: [{
            n: 'resourceId',
            col: true,
            en: {
              lp: 'ResourceId',
              ns: 'http:\/\/www.opengis.net\/fes\/2.0'
            },
            ti: 'Filter_2_0.ResourceIdType'
          }]
      }, {
        ln: 'TransactionSummaryType',
        ps: [{
            n: 'totalInserted',
            ti: 'Integer'
          }, {
            n: 'totalUpdated',
            ti: 'Integer'
          }, {
            n: 'totalReplaced',
            ti: 'Integer'
          }, {
            n: 'totalDeleted',
            ti: 'Integer'
          }]
      }, {
        ln: 'ParameterType',
        ps: [{
            n: 'content',
            col: true,
            t: 'ae'
          }, {
            n: 'name',
            t: 'a'
          }]
      }, {
        ln: 'FeatureTypeType',
        ps: [{
            n: 'name',
            en: 'Name',
            ti: 'QName'
          }, {
            n: 'title',
            col: true,
            en: 'Title',
            ti: 'WFS_2_0.Title'
          }, {
            n: '_abstract',
            col: true,
            en: 'Abstract',
            ti: 'WFS_2_0.Abstract'
          }, {
            n: 'keywords',
            col: true,
            en: {
              lp: 'Keywords',
              ns: 'http:\/\/www.opengis.net\/ows\/1.1'
            },
            ti: 'OWS_1_1_0.KeywordsType'
          }, {
            n: 'defaultCRS',
            en: 'DefaultCRS'
          }, {
            n: 'otherCRS',
            col: true,
            en: 'OtherCRS'
          }, {
            n: 'noCRS',
            en: 'NoCRS',
            ti: 'WFS_2_0.FeatureTypeType.NoCRS'
          }, {
            n: 'outputFormats',
            en: 'OutputFormats',
            ti: 'WFS_2_0.OutputFormatListType'
          }, {
            n: 'wgs84BoundingBox',
            col: true,
            en: {
              lp: 'WGS84BoundingBox',
              ns: 'http:\/\/www.opengis.net\/ows\/1.1'
            },
            ti: 'OWS_1_1_0.WGS84BoundingBoxType'
          }, {
            n: 'metadataURL',
            col: true,
            en: 'MetadataURL',
            ti: 'WFS_2_0.MetadataURLType'
          }, {
            n: 'extendedDescription',
            en: 'ExtendedDescription',
            ti: 'WFS_2_0.ExtendedDescriptionType'
          }]
      }, {
        ln: 'StoredQueryDescriptionType',
        ps: [{
            n: 'title',
            col: true,
            en: 'Title',
            ti: 'WFS_2_0.Title'
          }, {
            n: '_abstract',
            col: true,
            en: 'Abstract',
            ti: 'WFS_2_0.Abstract'
          }, {
            n: 'metadata',
            col: true,
            en: {
              lp: 'Metadata',
              ns: 'http:\/\/www.opengis.net\/ows\/1.1'
            },
            ti: 'OWS_1_1_0.MetadataType'
          }, {
            n: 'parameter',
            col: true,
            en: 'Parameter',
            ti: 'WFS_2_0.ParameterExpressionType'
          }, {
            n: 'queryExpressionText',
            col: true,
            en: 'QueryExpressionText',
            ti: 'WFS_2_0.QueryExpressionTextType'
          }, {
            n: 'id',
            t: 'a'
          }]
      }, {
        ln: 'QueryExpressionTextType',
        ps: [{
            n: 'content',
            col: true,
            typed: false,
            t: 'ae'
          }, {
            n: 'returnFeatureTypes',
            ti: {
              t: 'l',
              ti: 'QName'
            },
            t: 'a'
          }, {
            n: 'language',
            t: 'a'
          }, {
            n: 'isPrivate',
            ti: 'Boolean',
            t: 'a'
          }]
      }, {
        ln: 'FeatureTypeType.NoCRS'
      }, {
        ln: 'WFSCapabilitiesType.WSDL',
        ps: [{
            n: 'type',
            ti: 'XLink_1_0.TypeType',
            an: {
              lp: 'type',
              ns: 'http:\/\/www.w3.org\/1999\/xlink'
            },
            t: 'a'
          }, {
            n: 'href',
            an: {
              lp: 'href',
              ns: 'http:\/\/www.w3.org\/1999\/xlink'
            },
            t: 'a'
          }, {
            n: 'role',
            an: {
              lp: 'role',
              ns: 'http:\/\/www.w3.org\/1999\/xlink'
            },
            t: 'a'
          }, {
            n: 'arcrole',
            an: {
              lp: 'arcrole',
              ns: 'http:\/\/www.w3.org\/1999\/xlink'
            },
            t: 'a'
          }, {
            n: 'title',
            an: {
              lp: 'title',
              ns: 'http:\/\/www.w3.org\/1999\/xlink'
            },
            t: 'a'
          }, {
            n: 'show',
            ti: 'XLink_1_0.ShowType',
            an: {
              lp: 'show',
              ns: 'http:\/\/www.w3.org\/1999\/xlink'
            },
            t: 'a'
          }, {
            n: 'actuate',
            ti: 'XLink_1_0.ActuateType',
            an: {
              lp: 'actuate',
              ns: 'http:\/\/www.w3.org\/1999\/xlink'
            },
            t: 'a'
          }]
      }, {
        ln: 'PropertyType.ValueReference',
        ps: [{
            n: 'value',
            t: 'v'
          }, {
            n: 'action',
            t: 'a'
          }]
      }, {
        t: 'enum',
        ln: 'ResolveValueType',
        vs: ['local', 'remote', 'all', 'none']
      }, {
        t: 'enum',
        ln: 'StarStringType',
        vs: ['*']
      }, {
        t: 'enum',
        ln: 'AllSomeType',
        vs: ['ALL', 'SOME']
      }, {
        t: 'enum',
        ln: 'ResultTypeType',
        vs: ['results', 'hits']
      }, {
        t: 'enum',
        ln: 'UpdateActionType',
        vs: ['replace', 'insertBefore', 'insertAfter', 'remove']
      }],
    eis: [{
        en: 'additionalValues',
        ti: 'WFS_2_0.AdditionalValues'
      }, {
        en: 'DropStoredQuery',
        ti: 'WFS_2_0.DropStoredQuery'
      }, {
        en: 'additionalObjects',
        ti: 'WFS_2_0.AdditionalObjects'
      }, {
        en: 'Abstract',
        ti: 'WFS_2_0.Abstract'
      }, {
        en: 'Title',
        ti: 'WFS_2_0.Title'
      }, {
        en: 'truncatedResponse',
        ti: 'WFS_2_0.TruncatedResponse'
      }, {
        en: 'AbstractTransactionAction',
        ti: 'WFS_2_0.AbstractTransactionActionType'
      }, {
        en: 'ValueCollection',
        ti: 'WFS_2_0.ValueCollectionType'
      }, {
        en: 'DropStoredQueryResponse',
        ti: 'WFS_2_0.ExecutionStatusType'
      }, {
        en: 'Transaction',
        ti: 'WFS_2_0.TransactionType'
      }, {
        en: 'FeatureCollection',
        ti: 'WFS_2_0.FeatureCollectionType',
        sh: 'SimpleFeatureCollection'
      }, {
        en: 'Value',
        ti: 'AnyType'
      }, {
        en: 'Tuple',
        ti: 'WFS_2_0.TupleType'
      }, {
        en: 'DescribeStoredQueries',
        ti: 'WFS_2_0.DescribeStoredQueriesType'
      }, {
        en: 'GetFeature',
        ti: 'WFS_2_0.GetFeatureType'
      }, {
        en: 'PropertyName',
        ti: 'WFS_2_0.PropertyName',
        sh: {
          lp: 'AbstractProjectionClause',
          ns: 'http:\/\/www.opengis.net\/fes\/2.0'
        }
      }, {
        en: 'LockFeatureResponse',
        ti: 'WFS_2_0.LockFeatureResponseType'
      }, {
        en: 'Replace',
        ti: 'WFS_2_0.ReplaceType',
        sh: 'AbstractTransactionAction'
      }, {
        en: 'boundedBy',
        ti: 'WFS_2_0.EnvelopePropertyType'
      }, {
        en: 'GetFeatureWithLock',
        ti: 'WFS_2_0.GetFeatureWithLockType'
      }, {
        en: 'WFS_Capabilities',
        ti: 'WFS_2_0.WFSCapabilitiesType'
      }, {
        en: 'CreateStoredQueryResponse',
        ti: 'WFS_2_0.CreateStoredQueryResponseType'
      }, {
        en: 'SimpleFeatureCollection',
        ti: 'WFS_2_0.SimpleFeatureCollectionType'
      }, {
        en: 'TransactionResponse',
        ti: 'WFS_2_0.TransactionResponseType'
      }, {
        en: 'Native',
        ti: 'WFS_2_0.NativeType',
        sh: 'AbstractTransactionAction'
      }, {
        en: 'GetCapabilities',
        ti: 'WFS_2_0.GetCapabilitiesType'
      }, {
        en: 'CreateStoredQuery',
        ti: 'WFS_2_0.CreateStoredQueryType'
      }, {
        en: 'member',
        ti: 'WFS_2_0.MemberPropertyType'
      }, {
        en: 'GetPropertyValue',
        ti: 'WFS_2_0.GetPropertyValueType'
      }, {
        en: 'Property',
        ti: 'WFS_2_0.PropertyType'
      }, {
        en: 'DescribeStoredQueriesResponse',
        ti: 'WFS_2_0.DescribeStoredQueriesResponseType'
      }, {
        en: 'StoredQuery',
        ti: 'WFS_2_0.StoredQueryType',
        sh: {
          lp: 'AbstractQueryExpression',
          ns: 'http:\/\/www.opengis.net\/fes\/2.0'
        }
      }, {
        en: 'DescribeFeatureType',
        ti: 'WFS_2_0.DescribeFeatureTypeType'
      }, {
        en: 'Delete',
        ti: 'WFS_2_0.DeleteType',
        sh: 'AbstractTransactionAction'
      }, {
        en: 'ListStoredQueries',
        ti: 'WFS_2_0.ListStoredQueriesType'
      }, {
        en: 'Element',
        ti: 'WFS_2_0.ElementType'
      }, {
        en: 'LockFeature',
        ti: 'WFS_2_0.LockFeatureType'
      }, {
        en: 'Query',
        ti: 'WFS_2_0.QueryType',
        sh: {
          lp: 'AbstractAdhocQueryExpression',
          ns: 'http:\/\/www.opengis.net\/fes\/2.0'
        }
      }, {
        en: 'ValueList',
        ti: 'WFS_2_0.ValueListType'
      }, {
        en: 'FeatureTypeList',
        ti: 'WFS_2_0.FeatureTypeListType'
      }, {
        en: 'Insert',
        ti: 'WFS_2_0.InsertType',
        sh: 'AbstractTransactionAction'
      }, {
        en: 'Update',
        ti: 'WFS_2_0.UpdateType',
        sh: 'AbstractTransactionAction'
      }, {
        en: 'ListStoredQueriesResponse',
        ti: 'WFS_2_0.ListStoredQueriesResponseType'
      }]
  };
  return {
    WFS_2_0: WFS_2_0
  };
};
if (typeof define === 'function' && define.amd) {
  define([], WFS_2_0_Module_Factory);
}
else {
  if (typeof module !== 'undefined' && module.exports) {
    module.exports.WFS_2_0 = WFS_2_0_Module_Factory().WFS_2_0;
  }
  else {
    var WFS_2_0 = WFS_2_0_Module_Factory().WFS_2_0;
  }
}