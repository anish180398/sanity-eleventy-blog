export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-eleventy-blog'
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
                  buildHookId: '62ea53589d56ce1613f2dd1c',
                  title: 'Sanity Studio',
                  name: 'sanity-eleventy-blog-studio-a5s7sfp1',
                  apiId: '572acf45-87b7-4c8e-8b22-b8cf28f39676'
                },
                {
                  buildHookId: '62ea5358e07fb21631c50779',
                  title: 'Blog Website',
                  name: 'sanity-eleventy-blog-web-jd855mfp',
                  apiId: '1d808c3d-d0d7-40de-a874-8b38701d8411'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/anish180398/sanity-eleventy-blog',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-eleventy-blog-web-jd855mfp.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
