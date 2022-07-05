//@ui5-bundle mtk/com/firsttryapppass/Component-preload.js
jQuery.sap.registerPreloadedModules({
"version":"2.0",
"modules":{
	"mtk/com/firsttryapppass/Component.js":function(){sap.ui.define(["sap/fe/core/AppComponent"],function(t){"use strict";return t.extend("mtk.com.firsttryapppass.Component",{metadata:{manifest:"json"}})});
},
	"mtk/com/firsttryapppass/i18n/i18n.properties":'# This is the resource bundle for mtk.com.firsttryapppass\n\n#Texts for manifest.json\n\n#XTIT: Application name\nappTitle=App Title Pass\n\n#YDES: Application description\nappDescription=A Fiori application.\n\nflpTitle=Pass app\n\nflpSubtitle=\n',
	"mtk/com/firsttryapppass/manifest.json":'{"_version":"1.40.0","sap.app":{"id":"mtk.com.firsttryapppass","type":"application","i18n":"i18n/i18n.properties","applicationVersion":{"version":"0.0.1"},"title":"{{appTitle}}","description":"{{appDescription}}","resources":"resources.json","sourceTemplate":{"id":"@sap-ux/fiori-elements-writer:lrop","version":"0.3.6","toolsId":"6543bf8a-e0bc-4d04-927c-8303f57e6f1a"},"dataSources":{"mainService":{"uri":"pass/","type":"OData","settings":{"annotations":["annotation"],"localUri":"localService/metadata.xml","odataVersion":"4.0"}},"annotation":{"type":"ODataAnnotation","uri":"annotations/annotation.xml","settings":{"localUri":"annotations/annotation.xml"}}},"crossNavigation":{"inbounds":{"mtk-com-firsttryapppass-inbound":{"signature":{"parameters":{},"additionalParameters":"allowed"},"semanticObject":"passap","action":"display","title":"{{flpTitle}}","subTitle":"{{flpSubtitle}}","icon":""}}}},"sap.ui":{"technology":"UI5","icons":{"icon":"","favIcon":"","phone":"","phone@2":"","tablet":"","tablet@2":""},"deviceTypes":{"desktop":true,"tablet":true,"phone":true}},"sap.ui5":{"flexEnabled":true,"dependencies":{"minUI5Version":"1.102.1","libs":{"sap.m":{},"sap.ui.core":{},"sap.ushell":{},"sap.fe.templates":{}}},"contentDensities":{"compact":true,"cozy":true},"models":{"i18n":{"type":"sap.ui.model.resource.ResourceModel","settings":{"bundleName":"mtk.com.firsttryapppass.i18n.i18n"}},"":{"dataSource":"mainService","preload":true,"settings":{"synchronizationMode":"None","operationMode":"Server","autoExpandSelect":true,"earlyRequests":true}},"@i18n":{"type":"sap.ui.model.resource.ResourceModel","uri":"i18n/i18n.properties"}},"resources":{"css":[]},"routing":{"config":{},"routes":[{"pattern":":?query:","name":"StudentList","target":"StudentList"},{"pattern":"Student({key}):?query:","name":"StudentObjectPage","target":"StudentObjectPage"}],"targets":{"StudentList":{"type":"Component","id":"StudentList","name":"sap.fe.templates.ListReport","options":{"settings":{"entitySet":"Student","variantManagement":"Page","navigation":{"Student":{"detail":{"route":"StudentObjectPage"}}}}}},"StudentObjectPage":{"type":"Component","id":"StudentObjectPage","name":"sap.fe.templates.ObjectPage","options":{"settings":{"editableHeaderContent":false,"entitySet":"Student"}}}}}},"sap.fiori":{"registrationIds":[],"archeType":"transactional"},"sap.cloud":{"public":true,"service":"managedRouterCapProject"}}'
}});
