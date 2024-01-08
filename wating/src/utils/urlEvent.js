const cur = '/' + window.location.href.split('/')[3];

export const pageList = [
    {
        page: '/waitList',
        isChecked: false,
    },
    {
        page: '/personList',
        isChecked: false,
    },
    {
        page: '/groupList',
        isChecked: false
    }
];

export const MenuCheck = (link) => {
    if(cur === link) return '#0070b8'
    return '#004077';
}