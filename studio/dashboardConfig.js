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
                  buildHookId: '5d2b263280d7659ca0fc102a',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-portfolio-studio-fw8n9z97',
                  apiId: '207b38fd-232e-43c8-9d9e-f9ea9d4bc599'
                },
                {
                  buildHookId: '5d2b2632282cd01d25c3a72c',
                  title: 'Portfolio Website',
                  name: 'sanity-gatsby-portfolio-web-1w1k1j7t',
                  apiId: '7cdc4292-7c09-47e6-8c60-2a52c2391135'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/rikvanderkemp/sanity-gatsby-portfolio',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://sanity-gatsby-portfolio-web-1w1k1j7t.netlify.com',
            category: 'apps'
          }
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent projects', order: '_createdAt desc', types: ['project']},
      layout: {width: 'medium'}
    }
  ]
}
