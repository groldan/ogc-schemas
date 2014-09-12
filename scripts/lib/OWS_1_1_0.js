var OWS_1_1_0_Module_Factory = function () {
  var OWS_1_1_0 = {
    n: 'OWS_1_1_0',
    dens: 'http:\/\/www.opengis.net\/ows\/1.1',
    dans: 'http:\/\/www.w3.org\/1999\/xlink',
    tis: [{
        ln: 'OperationsMetadata',
        ps: [{
            n: 'operation',
            col: true,
            en: 'Operation',
            ti: 'OWS_1_1_0.Operation'
          }, {
            n: 'parameter',
            col: true,
            en: 'Parameter',
            ti: 'OWS_1_1_0.DomainType'
          }, {
            n: 'constraint',
            col: true,
            en: 'Constraint',
            ti: 'OWS_1_1_0.DomainType'
          }, {
            n: 'extendedCapabilities',
            en: 'ExtendedCapabilities',
            ti: 'AnyType'
          }]
      }, {
        ln: 'Operation',
        ps: [{
            n: 'dcp',
            col: true,
            en: 'DCP',
            ti: 'OWS_1_1_0.DCP'
          }, {
            n: 'parameter',
            col: true,
            en: 'Parameter',
            ti: 'OWS_1_1_0.DomainType'
          }, {
            n: 'constraint',
            col: true,
            en: 'Constraint',
            ti: 'OWS_1_1_0.DomainType'
          }, {
            n: 'metadata',
            col: true,
            en: 'Metadata',
            ti: 'OWS_1_1_0.MetadataType'
          }, {
            n: 'name',
            an: {
              lp: 'name'
            },
            t: 'a'
          }]
      }, {
        ln: 'DCP',
        ps: [{
            n: 'http',
            en: 'HTTP',
            ti: 'OWS_1_1_0.HTTP'
          }]
      }, {
        ln: 'HTTP',
        ps: [{
            n: 'getOrPost',
            col: true,
            mx: false,
            dom: false,
            typed: false,
            etis: [{
                en: 'Get',
                ti: 'OWS_1_1_0.RequestMethodType'
              }, {
                en: 'Post',
                ti: 'OWS_1_1_0.RequestMethodType'
              }],
            t: 'ers'
          }]
      }, {
        ln: 'RequestMethodType',
        bti: 'OWS_1_1_0.OnlineResourceType',
        ps: [{
            n: 'constraint',
            col: true,
            en: 'Constraint',
            ti: 'OWS_1_1_0.DomainType'
          }]
      }, {
        ln: 'DomainType',
        bti: 'OWS_1_1_0.UnNamedDomainType',
        ps: [{
            n: 'name',
            an: {
              lp: 'name'
            },
            t: 'a'
          }]
      }, {
        ln: 'MetadataType',
        ps: [{
            n: 'abstractMetaData',
            en: 'AbstractMetaData',
            ti: 'AnyType'
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
        ln: 'WGS84BoundingBoxType',
        bti: 'OWS_1_1_0.BoundingBoxType'
      }, {
        ln: 'BoundingBoxType',
        ps: [{
            n: 'lowerCorner',
            en: 'LowerCorner',
            ti: {
              t: 'l',
              ti: 'Double'
            }
          }, {
            n: 'upperCorner',
            en: 'UpperCorner',
            ti: {
              t: 'l',
              ti: 'Double'
            }
          }, {
            n: 'crs',
            an: {
              lp: 'crs'
            },
            t: 'a'
          }, {
            n: 'dimensions',
            ti: 'Integer',
            an: {
              lp: 'dimensions'
            },
            t: 'a'
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
              ns: 'http:\/\/www.opengis.net\/ows\/1.1'
            },
            t: 'a'
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
        ps: [{
            n: 'value',
            t: 'v'
          }, {
            n: 'reference',
            an: {
              lp: 'reference',
              ns: 'http:\/\/www.opengis.net\/ows\/1.1'
            },
            t: 'a'
          }]
      }, {
        ln: 'ContactType',
        ps: [{
            n: 'phone',
            en: 'Phone',
            ti: 'OWS_1_1_0.TelephoneType'
          }, {
            n: 'address',
            en: 'Address',
            ti: 'OWS_1_1_0.AddressType'
          }, {
            n: 'onlineResource',
            en: 'OnlineResource',
            ti: 'OWS_1_1_0.OnlineResourceType'
          }, {
            n: 'hoursOfService',
            en: 'HoursOfService'
          }, {
            n: 'contactInstructions',
            en: 'ContactInstructions'
          }]
      }, {
        ln: 'ServiceIdentification',
        bti: 'OWS_1_1_0.DescriptionType',
        ps: [{
            n: 'serviceType',
            en: 'ServiceType',
            ti: 'OWS_1_1_0.CodeType'
          }, {
            n: 'serviceTypeVersion',
            col: true,
            en: 'ServiceTypeVersion'
          }, {
            n: 'profile',
            col: true,
            en: 'Profile'
          }, {
            n: 'fees',
            en: 'Fees'
          }, {
            n: 'accessConstraints',
            col: true,
            en: 'AccessConstraints'
          }]
      }, {
        ln: 'DescriptionType',
        ps: [{
            n: 'title',
            col: true,
            en: 'Title',
            ti: 'OWS_1_1_0.LanguageStringType'
          }, {
            n: '_abstract',
            col: true,
            en: 'Abstract',
            ti: 'OWS_1_1_0.LanguageStringType'
          }, {
            n: 'keywords',
            col: true,
            en: 'Keywords',
            ti: 'OWS_1_1_0.KeywordsType'
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
        ln: 'KeywordsType',
        ps: [{
            n: 'keyword',
            col: true,
            en: 'Keyword',
            ti: 'OWS_1_1_0.LanguageStringType'
          }, {
            n: 'type',
            en: 'Type',
            ti: 'OWS_1_1_0.CodeType'
          }]
      }, {
        ln: 'ReferenceGroupType',
        bti: 'OWS_1_1_0.BasicIdentificationType',
        ps: [{
            n: 'abstractReferenceBase',
            col: true,
            mx: false,
            dom: false,
            typed: false,
            en: 'AbstractReferenceBase',
            ti: 'OWS_1_1_0.AbstractReferenceBaseType',
            t: 'er'
          }]
      }, {
        ln: 'GetResourceByIdType',
        ps: [{
            n: 'resourceID',
            col: true,
            en: 'ResourceID'
          }, {
            n: 'outputFormat',
            en: 'OutputFormat'
          }, {
            n: 'service',
            an: {
              lp: 'service'
            },
            t: 'a'
          }, {
            n: 'version',
            an: {
              lp: 'version'
            },
            t: 'a'
          }]
      }, {
        ln: 'AllowedValues',
        ps: [{
            n: 'valueOrRange',
            col: true,
            etis: [{
                en: 'Value',
                ti: 'OWS_1_1_0.ValueType'
              }, {
                en: 'Range',
                ti: 'OWS_1_1_0.RangeType'
              }],
            t: 'es'
          }]
      }, {
        ln: 'ValueType',
        ps: [{
            n: 'value',
            t: 'v'
          }]
      }, {
        ln: 'RangeType',
        ps: [{
            n: 'minimumValue',
            en: 'MinimumValue',
            ti: 'OWS_1_1_0.ValueType'
          }, {
            n: 'maximumValue',
            en: 'MaximumValue',
            ti: 'OWS_1_1_0.ValueType'
          }, {
            n: 'spacing',
            en: 'Spacing',
            ti: 'OWS_1_1_0.ValueType'
          }, {
            n: 'rangeClosure',
            ti: {
              t: 'l'
            },
            an: {
              lp: 'rangeClosure',
              ns: 'http:\/\/www.opengis.net\/ows\/1.1'
            },
            t: 'a'
          }]
      }, {
        ln: 'AbstractReferenceBaseType',
        ps: [{
            n: 'type',
            an: {
              lp: 'type',
              ns: 'http:\/\/www.opengis.net\/ows\/1.1'
            },
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
        ln: 'ServiceReferenceType',
        bti: 'OWS_1_1_0.ReferenceType',
        ps: [{
            n: 'requestMessage',
            en: 'RequestMessage',
            ti: 'AnyType'
          }, {
            n: 'requestMessageReference',
            en: 'RequestMessageReference'
          }]
      }, {
        ln: 'ReferenceType',
        bti: 'OWS_1_1_0.AbstractReferenceBaseType',
        ps: [{
            n: 'identifier',
            en: 'Identifier',
            ti: 'OWS_1_1_0.CodeType'
          }, {
            n: '_abstract',
            col: true,
            en: 'Abstract',
            ti: 'OWS_1_1_0.LanguageStringType'
          }, {
            n: 'format',
            en: 'Format'
          }, {
            n: 'metadata',
            col: true,
            en: 'Metadata',
            ti: 'OWS_1_1_0.MetadataType'
          }]
      }, {
        ln: 'ServiceProvider',
        ps: [{
            n: 'providerName',
            en: 'ProviderName'
          }, {
            n: 'providerSite',
            en: 'ProviderSite',
            ti: 'OWS_1_1_0.OnlineResourceType'
          }, {
            n: 'serviceContact',
            en: 'ServiceContact',
            ti: 'OWS_1_1_0.ResponsiblePartySubsetType'
          }]
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
            ti: 'OWS_1_1_0.ContactType'
          }, {
            n: 'role',
            en: 'Role',
            ti: 'OWS_1_1_0.CodeType'
          }]
      }, {
        ln: 'ExceptionReport',
        ps: [{
            n: 'exception',
            col: true,
            en: 'Exception',
            ti: 'OWS_1_1_0.ExceptionType'
          }, {
            n: 'version',
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
        ln: 'ExceptionType',
        ps: [{
            n: 'exceptionText',
            col: true,
            en: 'ExceptionText'
          }, {
            n: 'exceptionCode',
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
        ln: 'GetCapabilitiesType',
        ps: [{
            n: 'acceptVersions',
            en: 'AcceptVersions',
            ti: 'OWS_1_1_0.AcceptVersionsType'
          }, {
            n: 'sections',
            en: 'Sections',
            ti: 'OWS_1_1_0.SectionsType'
          }, {
            n: 'acceptFormats',
            en: 'AcceptFormats',
            ti: 'OWS_1_1_0.AcceptFormatsType'
          }, {
            n: 'updateSequence',
            an: {
              lp: 'updateSequence'
            },
            t: 'a'
          }]
      }, {
        ln: 'NoValues'
      }, {
        ln: 'ManifestType',
        bti: 'OWS_1_1_0.BasicIdentificationType',
        ps: [{
            n: 'referenceGroup',
            col: true,
            en: 'ReferenceGroup',
            ti: 'OWS_1_1_0.ReferenceGroupType'
          }]
      }, {
        ln: 'DatasetDescriptionSummaryBaseType',
        bti: 'OWS_1_1_0.DescriptionType',
        ps: [{
            n: 'wgs84BoundingBox',
            col: true,
            en: 'WGS84BoundingBox',
            ti: 'OWS_1_1_0.WGS84BoundingBoxType'
          }, {
            n: 'identifier',
            en: 'Identifier',
            ti: 'OWS_1_1_0.CodeType'
          }, {
            n: 'boundingBox',
            col: true,
            mx: false,
            dom: false,
            typed: false,
            en: 'BoundingBox',
            ti: 'OWS_1_1_0.BoundingBoxType',
            t: 'er'
          }, {
            n: 'metadata',
            col: true,
            en: 'Metadata',
            ti: 'OWS_1_1_0.MetadataType'
          }, {
            n: 'datasetDescriptionSummary',
            col: true,
            en: 'DatasetDescriptionSummary',
            ti: 'OWS_1_1_0.DatasetDescriptionSummaryBaseType'
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
            ti: 'OWS_1_1_0.ContactType'
          }, {
            n: 'role',
            en: 'Role',
            ti: 'OWS_1_1_0.CodeType'
          }]
      }, {
        ln: 'AnyValue'
      }, {
        ln: 'BasicIdentificationType',
        bti: 'OWS_1_1_0.DescriptionType',
        ps: [{
            n: 'identifier',
            en: 'Identifier',
            ti: 'OWS_1_1_0.CodeType'
          }, {
            n: 'metadata',
            col: true,
            en: 'Metadata',
            ti: 'OWS_1_1_0.MetadataType'
          }]
      }, {
        ln: 'TelephoneType',
        ps: [{
            n: 'voice',
            col: true,
            en: 'Voice'
          }, {
            n: 'facsimile',
            col: true,
            en: 'Facsimile'
          }]
      }, {
        ln: 'ContentsBaseType',
        ps: [{
            n: 'datasetDescriptionSummary',
            col: true,
            en: 'DatasetDescriptionSummary',
            ti: 'OWS_1_1_0.DatasetDescriptionSummaryBaseType'
          }, {
            n: 'otherSource',
            col: true,
            en: 'OtherSource',
            ti: 'OWS_1_1_0.MetadataType'
          }]
      }, {
        ln: 'CapabilitiesBaseType',
        ps: [{
            n: 'serviceIdentification',
            en: 'ServiceIdentification',
            ti: 'OWS_1_1_0.ServiceIdentification'
          }, {
            n: 'serviceProvider',
            en: 'ServiceProvider',
            ti: 'OWS_1_1_0.ServiceProvider'
          }, {
            n: 'operationsMetadata',
            en: 'OperationsMetadata',
            ti: 'OWS_1_1_0.OperationsMetadata'
          }, {
            n: 'version',
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
        ln: 'UnNamedDomainType',
        ps: [{
            n: 'allowedValues',
            en: 'AllowedValues',
            ti: 'OWS_1_1_0.AllowedValues'
          }, {
            n: 'anyValue',
            en: 'AnyValue',
            ti: 'OWS_1_1_0.AnyValue'
          }, {
            n: 'noValues',
            en: 'NoValues',
            ti: 'OWS_1_1_0.NoValues'
          }, {
            n: 'valuesReference',
            en: 'ValuesReference',
            ti: 'OWS_1_1_0.ValuesReference'
          }, {
            n: 'defaultValue',
            en: 'DefaultValue',
            ti: 'OWS_1_1_0.ValueType'
          }, {
            n: 'meaning',
            en: 'Meaning',
            ti: 'OWS_1_1_0.DomainMetadataType'
          }, {
            n: 'dataType',
            en: 'DataType',
            ti: 'OWS_1_1_0.DomainMetadataType'
          }, {
            n: 'uom',
            en: 'UOM',
            ti: 'OWS_1_1_0.DomainMetadataType'
          }, {
            n: 'referenceSystem',
            en: 'ReferenceSystem',
            ti: 'OWS_1_1_0.DomainMetadataType'
          }, {
            n: 'metadata',
            col: true,
            en: 'Metadata',
            ti: 'OWS_1_1_0.MetadataType'
          }]
      }, {
        ln: 'AcceptVersionsType',
        ps: [{
            n: 'version',
            col: true,
            en: 'Version'
          }]
      }, {
        ln: 'IdentificationType',
        bti: 'OWS_1_1_0.BasicIdentificationType',
        ps: [{
            n: 'boundingBox',
            col: true,
            mx: false,
            dom: false,
            typed: false,
            en: 'BoundingBox',
            ti: 'OWS_1_1_0.BoundingBoxType',
            t: 'er'
          }, {
            n: 'outputFormat',
            col: true,
            en: 'OutputFormat'
          }, {
            n: 'availableCRS',
            col: true,
            mx: false,
            dom: false,
            typed: false,
            en: 'AvailableCRS',
            t: 'er'
          }]
      }, {
        ln: 'AcceptFormatsType',
        ps: [{
            n: 'outputFormat',
            col: true,
            en: 'OutputFormat'
          }]
      }, {
        ln: 'SectionsType',
        ps: [{
            n: 'section',
            col: true,
            en: 'Section'
          }]
      }, {
        ln: 'AddressType',
        ps: [{
            n: 'deliveryPoint',
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
            col: true,
            en: 'ElectronicMailAddress'
          }]
      }],
    eis: [{
        en: 'OperationsMetadata',
        ti: 'OWS_1_1_0.OperationsMetadata'
      }, {
        en: 'Operation',
        ti: 'OWS_1_1_0.Operation'
      }, {
        en: 'DCP',
        ti: 'OWS_1_1_0.DCP'
      }, {
        en: 'HTTP',
        ti: 'OWS_1_1_0.HTTP'
      }, {
        en: 'ValuesReference',
        ti: 'OWS_1_1_0.ValuesReference'
      }, {
        en: 'ServiceIdentification',
        ti: 'OWS_1_1_0.ServiceIdentification'
      }, {
        en: 'AllowedValues',
        ti: 'OWS_1_1_0.AllowedValues'
      }, {
        en: 'ServiceProvider',
        ti: 'OWS_1_1_0.ServiceProvider'
      }, {
        en: 'ExceptionReport',
        ti: 'OWS_1_1_0.ExceptionReport'
      }, {
        en: 'NoValues',
        ti: 'OWS_1_1_0.NoValues'
      }, {
        en: 'AnyValue',
        ti: 'OWS_1_1_0.AnyValue'
      }, {
        en: 'Metadata',
        ti: 'OWS_1_1_0.MetadataType'
      }, {
        en: 'MaximumValue',
        ti: 'OWS_1_1_0.ValueType'
      }, {
        en: 'WGS84BoundingBox',
        ti: 'OWS_1_1_0.WGS84BoundingBoxType',
        sh: 'BoundingBox'
      }, {
        en: 'ReferenceSystem',
        ti: 'OWS_1_1_0.DomainMetadataType'
      }, {
        en: 'Keywords',
        ti: 'OWS_1_1_0.KeywordsType'
      }, {
        en: 'OrganisationName'
      }, {
        en: 'DataType',
        ti: 'OWS_1_1_0.DomainMetadataType'
      }, {
        en: 'ContactInfo',
        ti: 'OWS_1_1_0.ContactType'
      }, {
        en: 'InputData',
        ti: 'OWS_1_1_0.ManifestType'
      }, {
        en: 'AbstractMetaData',
        ti: 'AnyType'
      }, {
        en: 'IndividualName'
      }, {
        en: 'DefaultValue',
        ti: 'OWS_1_1_0.ValueType'
      }, {
        en: 'OtherSource',
        ti: 'OWS_1_1_0.MetadataType'
      }, {
        en: 'Identifier',
        ti: 'OWS_1_1_0.CodeType'
      }, {
        en: 'Language'
      }, {
        en: 'GetCapabilities',
        ti: 'OWS_1_1_0.GetCapabilitiesType'
      }, {
        en: 'BoundingBox',
        ti: 'OWS_1_1_0.BoundingBoxType'
      }, {
        en: 'Resource',
        ti: 'AnyType'
      }, {
        en: 'OutputFormat'
      }, {
        en: 'Title',
        ti: 'OWS_1_1_0.LanguageStringType'
      }, {
        en: 'Spacing',
        ti: 'OWS_1_1_0.ValueType'
      }, {
        en: 'Fees'
      }, {
        en: 'Range',
        ti: 'OWS_1_1_0.RangeType'
      }, {
        en: 'Manifest',
        ti: 'OWS_1_1_0.ManifestType'
      }, {
        en: 'Exception',
        ti: 'OWS_1_1_0.ExceptionType'
      }, {
        en: 'AbstractReferenceBase',
        ti: 'OWS_1_1_0.AbstractReferenceBaseType'
      }, {
        en: 'ServiceReference',
        ti: 'OWS_1_1_0.ServiceReferenceType',
        sh: 'Reference'
      }, {
        en: 'ReferenceGroup',
        ti: 'OWS_1_1_0.ReferenceGroupType'
      }, {
        en: 'AccessConstraints'
      }, {
        en: 'ExtendedCapabilities',
        ti: 'AnyType'
      }, {
        en: 'GetResourceByID',
        ti: 'OWS_1_1_0.GetResourceByIdType'
      }, {
        en: 'DatasetDescriptionSummary',
        ti: 'OWS_1_1_0.DatasetDescriptionSummaryBaseType'
      }, {
        en: 'PositionName'
      }, {
        en: 'Abstract',
        ti: 'OWS_1_1_0.LanguageStringType'
      }, {
        en: 'Reference',
        ti: 'OWS_1_1_0.ReferenceType',
        sh: 'AbstractReferenceBase'
      }, {
        en: 'Value',
        ti: 'OWS_1_1_0.ValueType'
      }, {
        en: 'AvailableCRS'
      }, {
        en: 'MinimumValue',
        ti: 'OWS_1_1_0.ValueType'
      }, {
        en: 'OperationResponse',
        ti: 'OWS_1_1_0.ManifestType'
      }, {
        en: 'Meaning',
        ti: 'OWS_1_1_0.DomainMetadataType'
      }, {
        en: 'SupportedCRS',
        sh: 'AvailableCRS'
      }, {
        en: 'Role',
        ti: 'OWS_1_1_0.CodeType'
      }, {
        en: 'UOM',
        ti: 'OWS_1_1_0.DomainMetadataType'
      }, {
        en: 'PointOfContact',
        ti: 'OWS_1_1_0.ResponsiblePartyType'
      }, {
        en: 'Post',
        ti: 'OWS_1_1_0.RequestMethodType',
        sc: 'OWS_1_1_0.HTTP'
      }, {
        en: 'Get',
        ti: 'OWS_1_1_0.RequestMethodType',
        sc: 'OWS_1_1_0.HTTP'
      }]
  };
  return {
    OWS_1_1_0: OWS_1_1_0
  };
};
if (typeof define === 'function' && define.amd) {
  define([], OWS_1_1_0_Module_Factory);
}
else {
  if (typeof module !== 'undefined' && module.exports) {
    module.exports.OWS_1_1_0 = OWS_1_1_0_Module_Factory().OWS_1_1_0;
  }
  else {
    var OWS_1_1_0 = OWS_1_1_0_Module_Factory().OWS_1_1_0;
  }
}