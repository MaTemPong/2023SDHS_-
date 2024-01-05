const cur = '/' + window.location.href.split('/')[3];

export const MenuCheck = (link) => {
    if(cur === link) return '#0070b8'
    return '#004077';
}