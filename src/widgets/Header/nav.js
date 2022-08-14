import { CONTENT_ROUTE, HOME_ROUTE, QUIZ_ROUTE } from "../../app/routing/utils/consts";

export function getNavlist(login) {
  const nav = [
    {value: 'MOVIES', path: CONTENT_ROUTE},
    {value: 'QUIZ', path: QUIZ_ROUTE},
    {value: login, path: HOME_ROUTE},
  ]
  return nav
}