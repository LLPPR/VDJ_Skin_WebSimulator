# Virtual DJ Skin Web-Based Simulator

## Description
This project provides a web-based simulator for designing Virtual DJ skins. It allows for real-time preview of changes to the skin design using an XML file. The simulator leverages HTML, CSS, and JavaScript to simulate the skin layout and styles defined in the XML file.

## Rationale
The purpose of this project is to provide an intuitive and visual way for artists to design and customize Virtual DJ skins without needing in-depth coding knowledge. By using web technologies, this tool offers a flexible and accessible platform for skin design.

## Directory Structure
```
VDJ_Skin_WebSimulator/
├── skins/
│   ├── skin.xml
│   ├── skin.xsl
├── scripts/
│   ├── main.js
├── styles/
│   ├── style.css
├── index.html
└── README.md
```

## Usage
1. **Open `index.html` in a Web Browser:** 
   - This file serves as the main entry point for the simulator. Opening it in a web browser will allow you to see the current state of the skin design.
2. **Edit the XML File in the `skins` Directory:**
   - Modify `skin.xml` to change the elements and their properties. This file defines the structure and components of the skin.
3. **Refresh the Browser to See Changes:**
   - After making changes to `skin.xml`, refresh the browser to see the updates in real-time.

## Customization
- **Modify `index.html`:**
  - Change the structure and elements of the skin directly in this file if needed.
- **Edit `styles/style.css`:**
  - Update the base styles and appearance of the simulator by editing this CSS file.
- **Add or Replace Images:**
  - Add or replace images in the `skins` directory as needed for your skin design.
- **Update `scripts/main.js`:**
  - Handle more complex parsing and styling logic based on the XML file by modifying this JavaScript file.

## Change Log
- **2025-02-24:** Initial setup and organization of the repository. Created `skin.xml`, `skin.xsl`, and updated `index.html` to integrate XSLT for real-time previews.
- **2025-02-24:** Structured the repository into `skins`, `scripts`, and `styles` directories for better organization and maintainability.
- **2025-02-24:** Updated README documentation to reflect the new structure and usage instructions.

## Additional Documentation
- **Commit History:** View detailed commit history [here](https://github.com/LPX1138/VDJ_Skin_WebSimulator/commits).

For any questions or further assistance, please feel free to open an issue on the repository.

---

## Disclaimer
This project is not affiliated with, sponsored by, or endorsed by Virtual DJ. It is a contribution to the open source community, created by an old school graphic designer, new school functional analyst and lifelong DJ. This project aims to capture the ease of use of the old WYSIWYG web design software to motivatte more users to contribute to the customization and usability of Virtual DJ.

---
