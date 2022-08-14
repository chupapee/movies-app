import { CONTENT_ROUTE, QUIZ_ROUTE } from "../../app/routing/utils/consts";

export function getNavlist(login) {
  const nav = [
    {value: 'QUIZ', path: QUIZ_ROUTE},
    {value: login, path: CONTENT_ROUTE},
  ]
  return nav
}