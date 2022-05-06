// // Github Class

// class Github {
//     constructor() {
//         this.client_id = '3d391f1dba748bce91c5';
//         this.client_secret = '7862c4c3d7b9a403c2fd11cabed423e59a17067c';
//         this.repos_count = 5;
//         this.repos_sort = 'created: asc';
//     }

//     async getUser(user) {
//         // const profileResponse = await fetch(`https://api.github.com/users/
//         // ${user}?client_id=${this.clientID}&client_secret=${this.clientSecret}`);

//         const profileResponse = await fetch(`https://api.github.com/users/${user}?
//         client_id=${this.client_id}&client_secret=${this.client_secret}`);

//         const repoResponse = await fetch(`https://api.github.com/users/${user}/repos?
//         per_page=${this.repos_count}&sort=${this.repos_sort}&client_id=${this.client_id}&client_secret=${this.client_secret}`);

//         const profile = await profileResponse.json();
//         const repos = await repoResponse.json();

//         return {
//             profile,
//             repos
//         }
//     }
// }

class Github {
    constructor() {
      this.client_id = 'd9308aacf8b204d361fd';
      this.client_secret = '84969aeef73956f4ec9e8716d1840532802bb81b';
      this.repos_count = 5;
      this.repos_sort = 'created: asc';
    }
  
    async getUser(user) {
      const profileResponse = await fetch(`https://api.github.com/users/${user}?
      client_id=${this.client_id}&client_secret=${this.client_secret}`);
  
      const repoResponse = await fetch(`https://api.github.com/users/${user}/repos?
      per_page=${this.repos_count}&sort=${this.repos_sort}&client_id=${this.client_id}&client_secret=${this.client_secret}`);
  
      const profile = await profileResponse.json();
      const repos = await repoResponse.json();
  
      return {
        profile,
        repos
      }
    }
  }

