// Convert semantic color sections to table format
document.addEventListener('DOMContentLoaded', function() {
    // Define the semantic color sections to convert
    const semanticSections = [
        {
            title: 'Surface Colors',
            tokens: [
                { name: 'surface_01', value: '#FAFAFA', usage: 'Primary backgrounds, cards, panels' },
                { name: 'surface_02', value: '#EDEDED', usage: 'Secondary backgrounds, elevated surfaces' },
                { name: 'surface_03', value: '#080808', usage: 'High-contrast surfaces, overlays' },
                { name: 'surface_ai', value: '#EEE9FF', usage: 'AI-powered feature backgrounds' },
                { name: 'surface_success', value: '#C4EBD4', usage: 'Success state backgrounds' },
                { name: 'surface_info', value: '#BADAFA', usage: 'Informational backgrounds' },
                { name: 'surface_critical', value: '#FAF5E3', usage: 'Warning/caution backgrounds' },
                { name: 'surface_error', value: '#FFEBEB', usage: 'Error state backgrounds' }
            ]
        },
        {
            title: 'Interactive Colors',
            tokens: [
                { name: 'interactive_01', value: '#1A874F', usage: 'Primary buttons, main actions' },
                { name: 'interactive_pressed', value: '#0D381F', usage: 'Active/pressed state of primary' },
                { name: 'interactive_02', value: '#757575', usage: 'Secondary buttons, alternative actions' },
                { name: 'interactive_02_pressed', value: '#595A5C', usage: 'Active/pressed state of secondary' },
                { name: 'interactive_fill_disabled', value: '#EDEDED', usage: 'Disabled button backgrounds' },
                { name: 'interactive_text_disabled', value: '#A1A1A1', usage: 'Disabled button text' },
                { name: 'interactive_icon', value: '#757575', usage: 'Interactive icons (clickable)' },
                { name: 'interactive_icon_contrast', value: '#FAFAFA', usage: 'Icons on dark backgrounds' },
                { name: 'interactive_icon_disabled', value: '#A1A1A1', usage: 'Disabled interactive icons' },
                { name: 'interactive_ai', value: '#6E54FA', usage: 'AI-powered interactive elements' },
                { name: 'interactive_error', value: '#BD1C21', usage: 'Destructive actions (delete, remove)' },
                { name: 'interactive_success', value: '#125930', usage: 'Positive actions (save, confirm)' },
                { name: 'interactive_caution', value: '#D4A62E', usage: 'Caution actions (archive, hide)' },
                { name: 'interactive_info', value: '#1F78CC', usage: 'Informational actions (learn more, help)' }
            ]
        },
        {
            title: 'Text Colors',
            tokens: [
                { name: 'text_01', value: '#080808', usage: 'Primary text, headlines' },
                { name: 'text_02', value: '#404042', usage: 'Secondary text, body copy' },
                { name: 'text_03', value: '#757575', usage: 'Tertiary text, metadata, timestamps' },
                { name: 'text_04', value: '#FAFAFA', usage: 'Text on dark backgrounds' },
                { name: 'text_ai', value: '#5721F7', usage: 'AI-related text content' },
                { name: 'text_success', value: '#125930', usage: 'Success messages' },
                { name: 'text_error', value: '#BD1C21', usage: 'Error messages' },
                { name: 'text_critical', value: '#CC6215', usage: 'Warning text' },
                { name: 'text_info', value: '#17598F', usage: 'Informational text' }
            ]
        },
        {
            title: 'Stroke Colors',
            tokens: [
                { name: 'stroke_01', value: '#E8E8E8', usage: 'Subtle borders, dividers' },
                { name: 'stroke_02', value: '#A1A1A1', usage: 'Prominent borders, form fields' },
                { name: 'stroke_error', value: '#BD1C21', usage: 'Error state borders' },
                { name: 'stroke_success', value: '#125930', usage: 'Success state borders' },
                { name: 'stroke_info', value: '#1F78CC', usage: 'Info state borders' },
                { name: 'stroke_caution', value: '#D4A62E', usage: 'Warning state borders' },
                { name: 'stroke_ai', value: '#6E54FA', usage: 'AI feature borders' }
            ]
        },
        {
            title: 'Icon Colors',
            tokens: [
                { name: 'icon_01', value: '#080808', usage: 'Primary icons' },
                { name: 'icon_02', value: '#404042', usage: 'Secondary icons' },
                { name: 'icon_contrast', value: '#FAFAFA', usage: 'Icons on dark backgrounds' },
                { name: 'icon_success', value: '#125930', usage: 'Success state icons' },
                { name: 'icon_alert', value: '#CE7E1F', usage: 'Warning/alert icons' },
                { name: 'icon_error', value: '#BD1C21', usage: 'Error state icons' },
                { name: 'icon_info', value: '#17598F', usage: 'Information icons' },
                { name: 'icon_ai', value: '#5721F7', usage: 'AI-related icons' }
            ]
        }
    ];

    function createTokenTable(section) {
        const tableHTML = `
            <h3>${section.title}</h3>
            <table class="token-table">
                <thead>
                    <tr>
                        <th>Token</th>
                        <th>Value</th>
                        <th>Visual example</th>
                        <th>Semantic usage</th>
                    </tr>
                </thead>
                <tbody>
                    ${section.tokens.map(token => `
                        <tr>
                            <td>
                                <div class="token-name">${token.name}</div>
                            </td>
                            <td>
                                <div class="token-value">${token.value}</div>
                            </td>
                            <td>
                                <div class="color-swatch-table" style="background-color: ${token.value}; ${needsWhiteText(token.value) ? 'border: 1px solid #ddd;' : ''}"></div>
                            </td>
                            <td>
                                <div class="token-usage">${token.usage}</div>
                            </td>
                        </tr>
                    `).join('')}
                </tbody>
            </table>
        `;
        return tableHTML;
    }

    function needsWhiteText(hexColor) {
        // Simple check for light colors that need border
        const lightColors = ['#FAFAFA', '#EDEDED', '#F5F5F5', '#FFFFFF', '#FAF5E3', '#FFEBEB', '#C4EBD4', '#BADAFA'];
        return lightColors.includes(hexColor);
    }

    // Find and replace semantic color sections
    setTimeout(() => {
        const semanticSection = document.getElementById('semantic');
        if (semanticSection) {
            // Find all h3 elements that are section titles
            const h3Elements = semanticSection.querySelectorAll('h3');
            
            h3Elements.forEach(h3 => {
                const title = h3.textContent.trim();
                const matchingSection = semanticSections.find(s => s.title === title);
                
                if (matchingSection) {
                    // Find the token grid that follows this h3
                    let nextElement = h3.nextElementSibling;
                    while (nextElement && !nextElement.classList.contains('token-grid')) {
                        nextElement = nextElement.nextElementSibling;
                    }
                    
                    if (nextElement && nextElement.classList.contains('token-grid')) {
                        // Replace the grid with a table
                        const tableContainer = document.createElement('div');
                        tableContainer.innerHTML = createTokenTable(matchingSection).replace(`<h3>${title}</h3>`, '');
                        
                        nextElement.parentNode.replaceChild(tableContainer.firstElementChild, nextElement);
                    }
                }
            });
        }
    }, 100);
});