async function loadXMLDoc(filename) {
    const response = await fetch(filename);
    return response.text();
}

async function displaySkin() {
    const xml = await loadXMLDoc('skins/skin.xml');
    const xsl = await loadXMLDoc('skins/skin.xsl');

    const parser = new DOMParser();
    const xmlDoc = parser.parseFromString(xml, "text/xml");
    const xslDoc = parser.parseFromString(xsl, "text/xml");

    const xsltProcessor = new XSLTProcessor();
    xsltProcessor.importStylesheet(xslDoc);

    const resultDocument = xsltProcessor.transformToFragment(xmlDoc, document);
    document.getElementById('skin-container').appendChild(resultDocument);
}

document.addEventListener('DOMContentLoaded', displaySkin);
