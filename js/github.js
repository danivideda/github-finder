class Github {
  constructor () {
    this.client_id = 'd609bb5d1e378e2f1b7f';
    this.client_secret = '    edba339adbef4eee78183a4f7213dfe1be9beb47';
    this.repos_count = 5;
    this.repos_sort = 'created: asc';
  }
  
  async getUser(user) {
    const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);

    const repoResponse = await fetch(`https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}&client_id=${this.client_id}&client_secret=${this.client_secret}`);

    const profile = await profileResponse.json();
    const repos = await repoResponse.json();

    return {
      profile,
      repos
    }
  }
}