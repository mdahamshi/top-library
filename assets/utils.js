
const INFO = {
    site: 'https://sarawebs.com',
    company: 'SaraWebs',
    year: new Date().getFullYear()

}    
    
function generateID(prefix = ''){
    prefix = (prefix ? prefix + '-' : prefix);
    return prefix + crypto.randomUUID().toString().substring(0,8);
}

function addCopyRight(title = 'This WebSite'){
    const div = document.createElement('div');
    const p = document.createElement('p');
    p.style.textAlign = 'center';
    p.innerHTML = `
    ${title} © ${INFO.year}<br>Built with love by 
    <a href="${INFO.site}" style="color: #207de9;text-decoration: none;">${INFO.company}</a>
    `;
    
    div.appendChild(p);
    const footer = document.querySelector('footer');
    footer.appendChild(div);

}

export {generateID, addCopyRight};