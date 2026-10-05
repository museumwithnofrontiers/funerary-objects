import { describeGallerySmoke } from '@museumwnf/viewer-layout/dxa/testing'
import { catalogues as sharedTexts } from '@museumwnf/viewer-i18n/gallery'
import manifest from '@inventory-data/manifest.json'
import ownTexts from '../locales/en.json'
import config from '../src/dataset.config.js'

// The gallery family's smoke test, run against this gallery's own dataset.
// The picks are records of that dataset the tests look for; each is described
// in the suite's own documentation (@museumwnf/viewer-layout/dxa/testing).
describeGallerySmoke({
  config,
  sharedTexts,
  ownTexts,
  manifest,
  namespace: 'funeraryObjects',
  picks: {
    collection: {
      tiles: 9,
      paginations: 2,
    },
    about: 'Funerary objects',
    credits: 'LOCAL PROJECT TEAMS',
    chip: {
      item: '0e4485e1-3fb0-5d8c-a83c-5315bc85cb66',
      project: 'Discover Islamic Art',
      className: 'mwnf-chip--ISLandEPM',
    },
    noticeItem: 'f78b2e38-75a4-536e-b940-646dcbc84e4e',
    dynasty: {
      item: 'b4f5238a-71ec-54f2-9d9e-b6c1ed42c241',
      name: 'Umayyads',
    },
    timeline: {
      code: 'it',
      id: 'ita',
      country: 'Italy',
    },
    partner: {
      id: '559ab197-7289-5af4-a295-1118bde9afce',
      name: 'Museum of Islamic Art at the Pergamon Museum, State Museums',
      city: 'Berlin',
      country: 'Germany',
      objects: 2,
    },
  },
})
