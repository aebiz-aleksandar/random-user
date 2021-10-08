    //Function: Show Menu Info
    function showMenuInfo(element) {
        const userInfoTitle = element.dataset.title;
        const userInfoSubtitle = element.dataset.subtitle;
        //remove class active from all elements
        [...element.parentElement.children].forEach(child => child.classList.remove('active'));
        //add class active on hover element
        element.classList.add('active');

        //fill user info content with information
        document.querySelector('#content-subtitle').innerText = userInfoSubtitle;
        document.querySelector('#content-title').innerText = userInfoTitle;
    }

    export default showMenuInfo;