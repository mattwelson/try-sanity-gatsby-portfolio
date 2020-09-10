export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-portfolio'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5f5974d2cd23c20d6eb7f00c',
                  title: 'Sanity Studio',
                  name: 'try-sanity-gatsby-portfolio-studio',
                  apiId: 'be843a82-59db-4b46-90fb-ab450d2ed1bc'
                },
                {
                  buildHookId: '5f5974d2572182135c02a1bc',
                  title: 'Portfolio Website',
                  name: 'try-sanity-gatsby-portfolio',
                  apiId: '74057b19-ffb9-4954-b45a-f8ece541c019'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/mattwelson/try-sanity-gatsby-portfolio',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://try-sanity-gatsby-portfolio.netlify.app',
            category: 'apps'
          }
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent projects', order: '_createdAt desc', types: ['sampleProject']},
      layout: {width: 'medium'}
    }
  ]
}
