document.addEventListener('DOMContentLoaded', function() {
    const skinContainer = document.querySelector('.skin');

    // Load and parse the XML file
    fetch('skins/cpp_skin.xml')
        .then(response => response.text())
        .then(xmlString => {
            const parser = new DOMParser();
            const xmlDoc = parser.parseFromString(xmlString, 'text/xml');

            // Apply styles
            const styles = xmlDoc.getElementsByTagName('style');
            for (let style of styles) {
                const id = style.getAttribute('id');
                const color = style.getElementsByTagName('color')[0].textContent;
                const background = style.getElementsByTagName('background')[0]?.textContent;
                const bold = style.getElementsByTagName('bold')[0]?.textContent === 'true';
                const italic = style.getElementsByTagName('italic')[0]?.textContent === 'true';

                const styleElement = document.createElement('style');
                let cssText = `.${id} { color: ${color};`;
                if (background) cssText += ` background-color: ${background};`;
                if (bold) cssText += ` font-weight: bold;`;
                if (italic) cssText += ` font-style: italic;`;
                cssText += ` }`;
                styleElement.textContent = cssText;
                document.head.appendChild(styleElement);
            }

            // Generate content based on rules
            const rules = xmlDoc.getElementsByTagName('rule');
            for (let rule of rules) {
                const pattern = rule.getAttribute('pattern');
                const style = rule.getAttribute('style');
                const div = document.createElement('div');
                div.className = style;
                div.textContent = `Example text matching pattern: ${pattern}`;
                skinContainer.appendChild(div);
            }
        })
        .catch(error => console.error('Error loading XML:', error));
});
