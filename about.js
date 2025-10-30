document.addEventListener('DOMContentLoaded', () => {
    const tabs = document.querySelectorAll('.tab-button');
    const contents = document.querySelectorAll('.skill-content');

    const handleTabClick = (event) => {
        const targetTabId = event.currentTarget.id;
        const targetContentId = targetTabId.replace('tab-', 'content-');

        
        tabs.forEach(tab => {
            tab.classList.remove('active-tab', 'text-yellow-500');
            tab.classList.add('text-gray-400', 'hover:text-white');
        });
        contents.forEach(content => {
            content.classList.remove('active-content');
        });

        
        event.currentTarget.classList.add('active-tab', 'text-yellow-500');
        event.currentTarget.classList.remove('text-gray-400', 'hover:text-white');

        
        const activeContent = document.getElementById(targetContentId);
        if (activeContent) {
            activeContent.classList.add('active-content');
        }
    };

    tabs.forEach(tab => {
        tab.addEventListener('click', handleTabClick);
    });
});