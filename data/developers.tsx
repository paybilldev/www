import { Calendar } from 'lucide-react'
import {
  IconBriefcase2,
  IconChangelog,
  IconDiscussions,
  IconDocumentation,
  IconLifeBuoy2,
} from '~/components'

export const data = {
  navigation: [
    {
      label: 'Developers',
      links: [
        {
          text: 'Documentation',
          url: 'https://docs.paybill.dev',
          icon: IconDocumentation,
        },
        {
          text: 'Changelog',
          description: 'See the latest updates and product improvements.',
          url: 'https://docs.paybill.dev/docs/release-notes',
          icon: IconChangelog,
        },
        {
          text: 'Support',
          description: 'See the latest updates and product improvements.',
          url: '/support',
          icon: IconLifeBuoy2,
        },
      ],
    },
    {
      label: 'Resources',
      links: [
        {
          text: 'GitHub Discussions',
          url: 'https://github.com/orgs/paybilldev/discussions',
          icon: IconDiscussions,
        },
        {
          text: 'Careers',
          url: '/careers',
          icon: IconBriefcase2,
        },
        {
          text: 'Events & Webinars',
          url: '/events',
          icon: Calendar,
        },
      ],
    },
  ],
  footer: {
    support: {
      text: 'Support',
      description: '',
      url: '/support',
      icon: 'M6.87232 21.5743C9.09669 21.5743 10.8999 19.7711 10.8999 17.5467C10.8999 15.3223 9.09669 13.5191 6.87232 13.5191C4.64794 13.5191 2.84473 15.3223 2.84473 17.5467C2.84473 19.7711 4.64794 21.5743 6.87232 21.5743Z M17.127 3.67236V11.1724M20.877 7.42274H13.377M3.12305 3.67236H10.6231V11.1724H3.12305V3.67236ZM13.377 13.7966H20.877V21.2966H13.377V13.7966ZM10.8999 17.5467C10.8999 19.7711 9.09669 21.5743 6.87232 21.5743C4.64794 21.5743 2.84473 19.7711 2.84473 17.5467C2.84473 15.3223 4.64794 13.5191 6.87232 13.5191C9.09669 13.5191 10.8999 15.3223 10.8999 17.5467Z',
    },
    systemStatus: {
      text: 'System Status',
      description: '',
      url: 'https://paybill.statuspage.io/',
      icon: 'M6.87232 21.5743C9.09669 21.5743 10.8999 19.7711 10.8999 17.5467C10.8999 15.3223 9.09669 13.5191 6.87232 13.5191C4.64794 13.5191 2.84473 15.3223 2.84473 17.5467C2.84473 19.7711 4.64794 21.5743 6.87232 21.5743Z M17.127 3.67236V11.1724M20.877 7.42274H13.377M3.12305 3.67236H10.6231V11.1724H3.12305V3.67236ZM13.377 13.7966H20.877V21.2966H13.377V13.7966ZM10.8999 17.5467C10.8999 19.7711 9.09669 21.5743 6.87232 21.5743C4.64794 21.5743 2.84473 19.7711 2.84473 17.5467C2.84473 15.3223 4.64794 13.5191 6.87232 13.5191C9.09669 13.5191 10.8999 15.3223 10.8999 17.5467Z',
    },
  },
}
