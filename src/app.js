    //include js compontents
    import initUser from './components/initUser.js';
    import showMenuInfo from './components/showMenuInfo.js';
    //include style.scss
    import './scss/style.scss';
    
    
    //Function: APP
    async function app() {
        document.getElementById('user-container').innerHTML = await initUser();
        const userInfoItems = document.querySelectorAll('.user-info-menu li');
        userInfoItems.forEach((item) => {
            item.addEventListener('mouseover', e => {
                const element = e.currentTarget;
                showMenuInfo(element);
            });
        });
        document.getElementById('new-user').addEventListener('click', app);
    }
    app();

    
    
    
    
    
    // const items = document.querySelectorAll('.user-info-menu li');

    // items.forEach(item => {
    //     item.addEventListener('mouseover', itemEffect);
    // });

    // function itemEffect(e) {
    //     items.forEach(item => {
    //         item.classList.remove('active');
    //     });
    //     e.currentTarget.classList.add('active');
    // }