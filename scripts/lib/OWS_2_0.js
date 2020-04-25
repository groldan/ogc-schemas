var OWS_2_0_Module_Factory = function () {
  var OWS_2_0 = {
    n: 'OWS_2_0',
    dens: 'http:\/\/www.opengis.net\/ows\/2.0',
    dans: 'http:\/\/www.w3.org\/1999\/xlink',
    deps: ['XLink_1_0'],
    tis: [{
        ln: 'ContactType',
        ps: [{
            n: 'phone',
            en: 'Phone',
            ti: '.TelephoneType'
          }, {
            n: 'address',
            en: 'Address',
            ti: '.AddressType'
          }, {
            n: 'onlineResource',
            en: 'OnlineResource',
            ti: '.OnlineResourceType'
          }, {
            n: 'hoursOfService',
            en: 'HoursOfService'
          }, {
            n: 'contactInstructions',
            en: 'ContactInstructions'
          }]
      }, {
        ln: 'BoundingBoxType',
        ps: [{
            n: 'lowerCorner',
            rq: true,
            en: 'LowerCorner',
            ti: {
              t: 'l',
              bti: 'Double'
            }
          }, {
            n: 'upperCorner',
            rq: true,
            en: 'UpperCorner',
            ti: {
              t: 'l',
              bti: 'Double'
            }
          }, {
            n: 'crs',
            an: {
              lp: 'crs'
            },
            t: 'a'
          }, {
            n: 'dimensions',
            ti: 'PositiveInteger',
            an: {
              lp: 'dimensions'
            },
            t: 'a'
          }]
      }, {
        ln: 'AdditionalParameter',
        tn: null,
        ps: [{
            n: 'name',
            rq: true,
            en: 'Name',
            ti: '.CodeType'
          }, {
            n: 'value',
            rq: true,
            col: true,
            en: 'Value',
            ti: 'AnyType'
          }]
      }, {
        ln: 'ExceptionType',
        ps: [{
            n: 'exceptionText',
            mno: 0,
            col: true,
            en: 'ExceptionText'
          }, {
            n: 'exceptionCode',
            rq: true,
            an: {
              lp: 'exceptionCode'
            },
            t: 'a'
          }, {
            n: 'locator',
            an: {
              lp: 'locator'
            },
            t: 'a'
          }]
      }, {
        ln: 'ContentsBaseType',
        ps: [{
            n: 'datasetDescriptionSummary',
            mno: 0,
            col: true,
            en: 'DatasetDescriptionSummary',
            ti: '.DatasetDescriptionSummaryBaseType'
          }, {
            n: 'otherSource',
            mno: 0,
            col: true,
            en: 'OtherSource',
            ti: '.MetadataType'
          }]
      }, {
        ln: 'RequestMethodType',
        bti: '.OnlineResourceType',
        ps: [{
            n: 'constraint',
            mno: 0,
            col: true,
            en: 'Constraint',
            ti: '.DomainType'
          }]
      }, {
        ln: 'BasicIdentificationType',
        bti: '.DescriptionType',
        ps: [{
            n: 'identifier',
            en: 'Identifier',
            ti: '.CodeType'
          }, {
            n: 'metadata',
            mno: 0,
            col: true,
            mx: false,
            dom: false,
            en: 'Metadata',
            ti: '.MetadataType',
            t: 'er'
          }]
      }, {
        ln: 'DomainMetadataType',
        ps: [{
            n: 'value',
            t: 'v'
          }, {
            n: 'reference',
            an: {
              lp: 'reference',
              ns: 'http:\/\/www.opengis.net\/ows\/2.0'
            },
            t: 'a'
          }]
      }, {
        ln: 'AcceptVersionsType',
        ps: [{
            n: 'version',
            rq: true,
            col: true,
            en: 'Version'
          }]
      }, {
        ln: 'MetadataType',
        ps: [{
            n: 'abstractMetaData',
            mx: false,
            dom: false,
            en: 'AbstractMetaData',
            ti: 'AnyType',
            t: 'er'
          }, {
            n: 'about',
            an: {
              lp: 'about'
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
      }, {
        ln: 'TelephoneType',
        ps: [{
            n: 'voice',
            mno: 0,
            col: true,
            en: 'Voice'
          }, {
            n: 'facsimile',
            mno: 0,
            col: true,
            en: 'Facsimile'
          }]
      }, {
        ln: 'AdditionalParametersBaseType',
        bti: '.MetadataType'
      }, {
        ln: 'AbstractReferenceBaseType',
        ps: [{
            n: 'type',
            an: {
              lp: 'type',
              ns: 'http:\/\/www.opengis.net\/ows\/2.0'
            },
            t: 'a'
          }, {
            n: 'href',
            rq: true,
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
      }, {
        ln: 'IdentificationType',
        bti: '.BasicIdentificationType',
        ps: [{
            n: 'boundingBox',
            mno: 0,
            col: true,
            mx: false,
            dom: false,
            en: 'BoundingBox',
            ti: '.BoundingBoxType',
            t: 'er'
          }, {
            n: 'outputFormat',
            mno: 0,
            col: true,
            en: 'OutputFormat'
          }, {
            n: 'availableCRS',
            mno: 0,
            col: true,
            mx: false,
            dom: false,
            en: 'AvailableCRS',
            t: 'er'
          }]
      }, {
        ln: 'AcceptFormatsType',
        ps: [{
            n: 'outputFormat',
            mno: 0,
            col: true,
            en: 'OutputFormat'
          }]
      }, {
        ln: 'NilValueType',
        bti: '.CodeType',
        ps: [{
            n: 'nilReason',
            an: {
              lp: 'nilReason'
            },
            t: 'a'
          }]
      }, {
        ln: 'AllowedValues',
        tn: null,
        ps: [{
            n: 'valueOrRange',
            rq: true,
            col: true,
            etis: [{
                en: 'Value',
                ti: '.ValueType'
              }, {
                en: 'Range',
                ti: '.RangeType'
              }],
            t: 'es'
          }]
      }, {
        ln: 'AdditionalParametersType',
        bti: '.AdditionalParametersBaseType'
      }, {
        ln: 'OnlineResourceType',
        ps: [{
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
      }, {
        ln: 'ServiceIdentification',
        tn: null,
        bti: '.DescriptionType',
        ps: [{
            n: 'serviceType',
            rq: true,
            en: 'ServiceType',
            ti: '.CodeType'
          }, {
            n: 'serviceTypeVersion',
            rq: true,
            col: true,
            en: 'ServiceTypeVersion'
          }, {
            n: 'profile',
            mno: 0,
            col: true,
            en: 'Profile'
          }, {
            n: 'fees',
            en: 'Fees'
          }, {
            n: 'accessConstraints',
            mno: 0,
            col: true,
            en: 'AccessConstraints'
          }]
      }, {
        ln: 'ReferenceGroupType',
        bti: '.BasicIdentificationType',
        ps: [{
            n: 'abstractReferenceBase',
            rq: true,
            col: true,
            mx: false,
            dom: false,
            en: 'AbstractReferenceBase',
            ti: '.AbstractReferenceBaseType',
            t: 'er'
          }]
      }, {
        ln: 'GetCapabilitiesType',
        ps: [{
            n: 'acceptVersions',
            en: 'AcceptVersions',
            ti: '.AcceptVersionsType'
          }, {
            n: 'sections',
            en: 'Sections',
            ti: '.SectionsType'
          }, {
            n: 'acceptFormats',
            en: 'AcceptFormats',
            ti: '.AcceptFormatsType'
          }, {
            n: 'acceptLanguages',
            en: 'AcceptLanguages',
            ti: '.GetCapabilitiesType.AcceptLanguages'
          }, {
            n: 'updateSequence',
            an: {
              lp: 'updateSequence'
            },
            t: 'a'
          }]
      }, {
        ln: 'GetCapabilitiesType.AcceptLanguages',
        tn: null,
        ps: [{
            n: 'language',
            rq: true,
            col: true,
            en: 'Language',
            ti: 'Language'
          }]
      }, {
        ln: 'CapabilitiesBaseType',
        ps: [{
            n: 'serviceIdentification',
            en: 'ServiceIdentification',
            ti: '.ServiceIdentification'
          }, {
            n: 'serviceProvider',
            en: 'ServiceProvider',
            ti: '.ServiceProvider'
          }, {
            n: 'operationsMetadata',
            en: 'OperationsMetadata',
            ti: '.OperationsMetadata'
          }, {
            n: 'languages',
            en: 'Languages',
            ti: '.CapabilitiesBaseType.Languages'
          }, {
            n: 'version',
            rq: true,
            an: {
              lp: 'version'
            },
            t: 'a'
          }, {
            n: 'updateSequence',
            an: {
              lp: 'updateSequence'
            },
            t: 'a'
          }]
      }, {
        ln: 'ServiceProvider',
        tn: null,
        ps: [{
            n: 'providerName',
            rq: true,
            en: 'ProviderName'
          }, {
            n: 'providerSite',
            en: 'ProviderSite',
            ti: '.OnlineResourceType'
          }, {
            n: 'serviceContact',
            rq: true,
            en: 'ServiceContact',
            ti: '.ResponsiblePartySubsetType'
          }]
      }, {
        ln: 'ResponsiblePartyType',
        ps: [{
            n: 'individualName',
            en: 'IndividualName'
          }, {
            n: 'organisationName',
            en: 'OrganisationName'
          }, {
            n: 'positionName',
            en: 'PositionName'
          }, {
            n: 'contactInfo',
            en: 'ContactInfo',
            ti: '.ContactType'
          }, {
            n: 'role',
            rq: true,
            en: 'Role',
            ti: '.CodeType'
          }]
      }, {
        ln: 'ExceptionReport',
        tn: null,
        ps: [{
            n: 'exception',
            rq: true,
            col: true,
            en: 'Exception',
            ti: '.ExceptionType'
          }, {
            n: 'version',
            rq: true,
            an: {
              lp: 'version'
            },
            t: 'a'
          }, {
            n: 'lang',
            an: {
              lp: 'lang',
              ns: 'http:\/\/www.w3.org\/XML\/1998\/namespace'
            },
            t: 'a'
          }]
      }, {
        ln: 'ManifestType',
        bti: '.BasicIdentificationType',
        ps: [{
            n: 'referenceGroup',
            rq: true,
            col: true,
            en: 'ReferenceGroup',
            ti: '.ReferenceGroupType'
          }]
      }, {
        ln: 'ValueType',
        ps: [{
            n: 'value',
            t: 'v'
          }]
      }, {
        ln: 'LanguageStringType',
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
        ln: 'CapabilitiesBaseType.Languages',
        tn: null,
        ps: [{
            n: 'language',
            rq: true,
            col: true,
            en: 'Language',
            ti: 'Language'
          }]
      }, {
        ln: 'ReferenceType',
        bti: '.AbstractReferenceBaseType',
        ps: [{
            n: 'identifier',
            en: 'Identifier',
            ti: '.CodeType'
          }, {
            n: '_abstract',
            mno: 0,
            col: true,
            en: 'Abstract',
            ti: '.LanguageStringType'
          }, {
            n: 'format',
            en: 'Format'
          }, {
            n: 'metadata',
            mno: 0,
            col: true,
            mx: false,
            dom: false,
            en: 'Metadata',
            ti: '.MetadataType',
            t: 'er'
          }]
      }, {
        ln: 'OperationsMetadata',
        tn: null,
        ps: [{
            n: 'operation',
            rq: true,
            mno: 2,
            col: true,
            en: 'Operation',
            ti: '.Operation'
          }, {
            n: 'parameter',
            mno: 0,
            col: true,
            en: 'Parameter',
            ti: '.DomainType'
          }, {
            n: 'constraint',
            mno: 0,
            col: true,
            en: 'Constraint',
            ti: '.DomainType'
          }, {
            n: 'extendedCapabilities',
            en: 'ExtendedCapabilities',
            ti: 'AnyType'
          }]
      }, {
        ln: 'GetResourceByIdType',
        ps: [{
            n: 'resourceID',
            mno: 0,
            col: true,
            en: 'ResourceID'
          }, {
            n: 'outputFormat',
            en: 'OutputFormat'
          }, {
            n: 'service',
            rq: true,
            an: {
              lp: 'service'
            },
            t: 'a'
          }, {
            n: 'version',
            rq: true,
            an: {
              lp: 'version'
            },
            t: 'a'
          }]
      }, {
        ln: 'DescriptionType',
        ps: [{
            n: 'title',
            mno: 0,
            col: true,
            en: 'Title',
            ti: '.LanguageStringType'
          }, {
            n: '_abstract',
            mno: 0,
            col: true,
            en: 'Abstract',
            ti: '.LanguageStringType'
          }, {
            n: 'keywords',
            mno: 0,
            col: true,
            en: 'Keywords',
            ti: '.KeywordsType'
          }]
      }, {
        ln: 'ResponsiblePartySubsetType',
        ps: [{
            n: 'individualName',
            en: 'IndividualName'
          }, {
            n: 'positionName',
            en: 'PositionName'
          }, {
            n: 'contactInfo',
            en: 'ContactInfo',
            ti: '.ContactType'
          }, {
            n: 'role',
            en: 'Role',
            ti: '.CodeType'
          }]
      }, {
        ln: 'NoValues',
        tn: null
      }, {
        ln: 'DomainType',
        bti: '.UnNamedDomainType',
        ps: [{
            n: 'name',
            rq: true,
            an: {
              lp: 'name'
            },
            t: 'a'
          }]
      }, {
        ln: 'AnyValue',
        tn: null
      }, {
        ln: 'Operation',
        tn: null,
        ps: [{
            n: 'dcp',
            rq: true,
            col: true,
            en: 'DCP',
            ti: '.DCP'
          }, {
            n: 'parameter',
            mno: 0,
            col: true,
            en: 'Parameter',
            ti: '.DomainType'
          }, {
            n: 'constraint',
            mno: 0,
            col: true,
            en: 'Constraint',
            ti: '.DomainType'
          }, {
            n: 'metadata',
            mno: 0,
            col: true,
            mx: false,
            dom: false,
            en: 'Metadata',
            ti: '.MetadataType',
            t: 'er'
          }, {
            n: 'name',
            rq: true,
            an: {
              lp: 'name'
            },
            t: 'a'
          }]
      }, {
        ln: 'DatasetDescriptionSummaryBaseType',
        bti: '.DescriptionType',
        ps: [{
            n: 'wgs84BoundingBox',
            mno: 0,
            col: true,
            en: 'WGS84BoundingBox',
            ti: '.WGS84BoundingBoxType'
          }, {
            n: 'identifier',
            rq: true,
            en: 'Identifier',
            ti: '.CodeType'
          }, {
            n: 'boundingBox',
            mno: 0,
            col: true,
            mx: false,
            dom: false,
            en: 'BoundingBox',
            ti: '.BoundingBoxType',
            t: 'er'
          }, {
            n: 'metadata',
            mno: 0,
            col: true,
            mx: false,
            dom: false,
            en: 'Metadata',
            ti: '.MetadataType',
            t: 'er'
          }, {
            n: 'datasetDescriptionSummary',
            mno: 0,
            col: true,
            en: 'DatasetDescriptionSummary',
            ti: '.DatasetDescriptionSummaryBaseType'
          }]
      }, {
        ln: 'UnNamedDomainType',
        ps: [{
            n: 'allowedValues',
            rq: true,
            en: 'AllowedValues',
            ti: '.AllowedValues'
          }, {
            n: 'anyValue',
            rq: true,
            en: 'AnyValue',
            ti: '.AnyValue'
          }, {
            n: 'noValues',
            rq: true,
            en: 'NoValues',
            ti: '.NoValues'
          }, {
            n: 'valuesReference',
            rq: true,
            en: 'ValuesReference',
            ti: '.ValuesReference'
          }, {
            n: 'defaultValue',
            en: 'DefaultValue',
            ti: '.ValueType'
          }, {
            n: 'meaning',
            en: 'Meaning',
            ti: '.DomainMetadataType'
          }, {
            n: 'dataType',
            en: 'DataType',
            ti: '.DomainMetadataType'
          }, {
            n: 'uom',
            rq: true,
            en: 'UOM',
            ti: '.DomainMetadataType'
          }, {
            n: 'referenceSystem',
            rq: true,
            en: 'ReferenceSystem',
            ti: '.DomainMetadataType'
          }, {
            n: 'metadata',
            mno: 0,
            col: true,
            mx: false,
            dom: false,
            en: 'Metadata',
            ti: '.MetadataType',
            t: 'er'
          }]
      }, {
        ln: 'ServiceReferenceType',
        bti: '.ReferenceType',
        ps: [{
            n: 'requestMessage',
            rq: true,
            en: 'RequestMessage',
            ti: 'AnyType'
          }, {
            n: 'requestMessageReference',
            rq: true,
            en: 'RequestMessageReference'
          }]
      }, {
        ln: 'HTTP',
        tn: null,
        ps: [{
            n: 'getOrPost',
            rq: true,
            col: true,
            mx: false,
            dom: false,
            etis: [{
                en: 'Get',
                ti: '.RequestMethodType'
              }, {
                en: 'Post',
                ti: '.RequestMethodType'
              }],
            t: 'ers'
          }]
      }, {
        ln: 'RangeType',
        ps: [{
            n: 'minimumValue',
            en: 'MinimumValue',
            ti: '.ValueType'
          }, {
            n: 'maximumValue',
            en: 'MaximumValue',
            ti: '.ValueType'
          }, {
            n: 'spacing',
            en: 'Spacing',
            ti: '.ValueType'
          }, {
            n: 'rangeClosure',
            ti: {
              t: 'l'
            },
            an: {
              lp: 'rangeClosure',
              ns: 'http:\/\/www.opengis.net\/ows\/2.0'
            },
            t: 'a'
          }]
      }, {
        ln: 'WGS84BoundingBoxType',
        bti: '.BoundingBoxType'
      }, {
        ln: 'AddressType',
        ps: [{
            n: 'deliveryPoint',
            mno: 0,
            col: true,
            en: 'DeliveryPoint'
          }, {
            n: 'city',
            en: 'City'
          }, {
            n: 'administrativeArea',
            en: 'AdministrativeArea'
          }, {
            n: 'postalCode',
            en: 'PostalCode'
          }, {
            n: 'country',
            en: 'Country'
          }, {
            n: 'electronicMailAddress',
            mno: 0,
            col: true,
            en: 'ElectronicMailAddress'
          }]
      }, {
        ln: 'DCP',
        tn: null,
        ps: [{
            n: 'http',
            rq: true,
            en: 'HTTP',
            ti: '.HTTP'
          }]
      }, {
        ln: 'KeywordsType',
        ps: [{
            n: 'keyword',
            rq: true,
            col: true,
            en: 'Keyword',
            ti: '.LanguageStringType'
          }, {
            n: 'type',
            en: 'Type',
            ti: '.CodeType'
          }]
      }, {
        ln: 'CodeType',
        ps: [{
            n: 'value',
            t: 'v'
          }, {
            n: 'codeSpace',
            an: {
              lp: 'codeSpace'
            },
            t: 'a'
          }]
      }, {
        ln: 'ValuesReference',
        tn: null,
        ps: [{
            n: 'value',
            t: 'v'
          }, {
            n: 'reference',
            rq: true,
            an: {
              lp: 'reference',
              ns: 'http:\/\/www.opengis.net\/ows\/2.0'
            },
            t: 'a'
          }]
      }, {
        ln: 'SectionsType',
        ps: [{
            n: 'section',
            mno: 0,
            col: true,
            en: 'Section'
          }]
      }],
    eis: [{
        en: 'WGS84BoundingBox',
        ti: '.WGS84BoundingBoxType',
        sh: 'BoundingBox'
      }, {
        en: 'SupportedCRS',
        sh: 'AvailableCRS'
      }, {
        en: 'ReferenceSystem',
        ti: '.DomainMetadataType'
      }, {
        en: 'Meaning',
        ti: '.DomainMetadataType'
      }, {
        en: 'OperationResponse',
        ti: '.ManifestType'
      }, {
        en: 'NoValues',
        ti: '.NoValues'
      }, {
        en: 'OperationsMetadata',
        ti: '.OperationsMetadata'
      }, {
        en: 'ExtendedCapabilities',
        ti: 'AnyType'
      }, {
        en: 'AdditionalParameters',
        ti: '.AdditionalParametersType',
        sh: 'Metadata'
      }, {
        en: 'Title',
        ti: '.LanguageStringType'
      }, {
        en: 'ContactInfo',
        ti: '.ContactType'
      }, {
        en: 'AbstractMetaData',
        ti: 'AnyType'
      }, {
        en: 'Operation',
        ti: '.Operation'
      }, {
        en: 'DCP',
        ti: '.DCP'
      }, {
        en: 'MaximumValue',
        ti: '.ValueType'
      }, {
        en: 'DefaultValue',
        ti: '.ValueType'
      }, {
        en: 'AllowedValues',
        ti: '.AllowedValues'
      }, {
        en: 'PositionName'
      }, {
        en: 'GetCapabilities',
        ti: '.GetCapabilitiesType'
      }, {
        en: 'OtherSource',
        ti: '.MetadataType'
      }, {
        en: 'ReferenceGroup',
        ti: '.ReferenceGroupType'
      }, {
        en: 'ValuesReference',
        ti: '.ValuesReference'
      }, {
        en: 'Metadata',
        ti: '.MetadataType'
      }, {
        en: 'DataType',
        ti: '.DomainMetadataType'
      }, {
        en: 'HTTP',
        ti: '.HTTP'
      }, {
        en: 'UOM',
        ti: '.DomainMetadataType'
      }, {
        en: 'IndividualName'
      }, {
        en: 'ServiceIdentification',
        ti: '.ServiceIdentification'
      }, {
        en: 'Abstract',
        ti: '.LanguageStringType'
      }, {
        en: 'AbstractReferenceBase',
        ti: '.AbstractReferenceBaseType'
      }, {
        en: 'Role',
        ti: '.CodeType'
      }, {
        en: 'Range',
        ti: '.RangeType'
      }, {
        en: 'ServiceProvider',
        ti: '.ServiceProvider'
      }, {
        en: 'ServiceReference',
        ti: '.ServiceReferenceType',
        sh: 'Reference'
      }, {
        en: 'GetResourceByID',
        ti: '.GetResourceByIdType'
      }, {
        en: 'AvailableCRS'
      }, {
        en: 'Fees'
      }, {
        en: 'AnyValue',
        ti: '.AnyValue'
      }, {
        en: 'Manifest',
        ti: '.ManifestType'
      }, {
        en: 'Post',
        ti: '.RequestMethodType',
        sc: '.HTTP'
      }, {
        en: 'Exception',
        ti: '.ExceptionType'
      }, {
        en: 'Identifier',
        ti: '.CodeType'
      }, {
        en: 'Keywords',
        ti: '.KeywordsType'
      }, {
        en: 'Reference',
        ti: '.ReferenceType',
        sh: 'AbstractReferenceBase'
      }, {
        en: 'InputData',
        ti: '.ManifestType'
      }, {
        en: 'Resource',
        ti: 'AnyType'
      }, {
        en: 'DatasetDescriptionSummary',
        ti: '.DatasetDescriptionSummaryBaseType'
      }, {
        en: 'Language',
        ti: 'Language'
      }, {
        en: 'Spacing',
        ti: '.ValueType'
      }, {
        en: 'AdditionalParameter',
        ti: '.AdditionalParameter',
        sh: 'AbstractMetaData'
      }, {
        en: 'ExceptionReport',
        ti: '.ExceptionReport'
      }, {
        en: 'PointOfContact',
        ti: '.ResponsiblePartyType'
      }, {
        en: 'OutputFormat'
      }, {
        en: 'BoundingBox',
        ti: '.BoundingBoxType'
      }, {
        en: 'OrganisationName'
      }, {
        en: 'MinimumValue',
        ti: '.ValueType'
      }, {
        en: 'nilValue',
        ti: '.NilValueType'
      }, {
        en: 'Get',
        ti: '.RequestMethodType',
        sc: '.HTTP'
      }, {
        en: 'Value',
        ti: '.ValueType'
      }, {
        en: 'AccessConstraints'
      }]
  };
  return {
    OWS_2_0: OWS_2_0
  };
};
if (typeof define === 'function' && define.amd) {
  define([], OWS_2_0_Module_Factory);
}
else {
  var OWS_2_0_Module = OWS_2_0_Module_Factory();
  if (typeof module !== 'undefined' && module.exports) {
    module.exports.OWS_2_0 = OWS_2_0_Module.OWS_2_0;
  }
  else {
    var OWS_2_0 = OWS_2_0_Module.OWS_2_0;
  }
}