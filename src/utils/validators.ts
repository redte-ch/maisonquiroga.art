import { isString } from '~/utils/guards'

export const validateString = async (value: unknown): Promise<string> => {
  const [result] = await Promise.all([value])
  if (isString(result)) return result
  throw new TypeError(`Expected a string, got ${typeof result}`)
}
