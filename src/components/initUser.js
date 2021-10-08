    async function initUser() {
        const resposne = await fetch('https://randomuser.me/api');
        const resposneData = await resposne.json();
        const user = resposneData.results[0];

        const template = `
            <div class="container-header">
                <div class="user-image">
                    <img src="${ user.picture.large }" alt="user image">
                    <div id="new-user" class="new-user-tip">New User</div> 
                </div>
            </div>
            <div class="container-body">
                <div class="user-info-content">
                    <span id="content-subtitle">Hi, My name is</span>
                    <h2 id="content-title">${ user.name.first } ${user.name.last}</h2>
                </div>
                <ul class="user-info-menu">
                    <li class="name active" data-subtitle="Hi, My name is" data-title="${ user.name.first } ${ user.name.last }"></li>
                    <li class="email" data-subtitle="My email address is" data-title="${ user.email }"></li>
                    <li class="birthday" data-subtitle="My birthday is" data-title="${ formatDate(user.dob.date) }"></li>
                    <li class="location" data-subtitle="My address is" data-title="${ user.location.street.number } ${ user.location.street.name }"></li>
                    <li class="phone" data-subtitle="My phone number is" data-title="${ user.phone}"></li>
                    <li class="pass" data-subtitle="My password is" data-title="${ user.login.password }"></li>
                </ul>
            </div>
        `;

        return template;
    };

    export default initUser;

    //Function: Format Date
    function formatDate(userDate) {
        const date = new Date(userDate);
        const year = date.getFullYear();
        const month = date.getMonth() + 1;
        const day = date.getDate();

        return `${ day }/${ month }/${ year }`;
    }