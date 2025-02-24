<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
    <xsl:template match="/">
        <html>
            <body>
                <xsl:for-each select="skin/element">
                    <div style="position:absolute; left:{@x}px; top:{@y}px; width:{@width}px; height:{@height}px; border:1px solid black;">
                        <xsl:value-of select="@id"/>
                    </div>
                </xsl:for-each>
            </body>
        </html>
    </xsl:template>
</xsl:stylesheet>
