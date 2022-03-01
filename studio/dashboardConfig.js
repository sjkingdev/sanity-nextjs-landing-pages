export default {
  widgets: [
    // {
    //   name: 'sanity-tutorials',
    //   options: {
    //     templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
    //   }
    // },
    { name: 'structure-menu' },
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
                  buildHookId: '621e7600eee8e50c0178814f',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-2rj9kghf',
                  apiId: '75c24602-f3c7-4335-a3ba-25436e2d5d1c'
                },
                {
                  buildHookId: '621e76008dd88d00657c730a',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-y3kaqdwu',
                  apiId: 'cfaddf66-f740-4215-a314-043ecfc564ce'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/sjkingdev/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-y3kaqdwu.netlify.app', category: 'apps' }
        ]
      }
    },
    {
      name: 'document-list',
      options: { title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page'] },
      layout: { width: 'medium' }
    },
    { name: 'project-users', layout: { height: 'auto' } }
  ]
}
