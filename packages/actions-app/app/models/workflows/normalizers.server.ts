import { ValidationError } from '../errors';
import { ClientFormValue } from './types';

export type Normalizer<T> = (value: ClientFormValue) => T;

export const normalizeAsString: Normalizer<string> = (value) => {
  if (typeof value === 'string') {
    return value;
  }

  return normalizeAsSingleton(value);
};

export const normalizeAsNumber: Normalizer<number> = (value) => {
  const str = normalizeAsString(value);
  const num = Number(str);
  if (Number.isNaN(num)) {
    throw new ValidationError('Expected a number, but got ' + str);
  }
  return num;
};

export const normalizeAsArray: Normalizer<any> = <T>(value: T | T[] | undefined | null): T[] => {
  if (value === undefined || value === null) {
    return [];
  }
  if (Array.isArray(value)) {
    return value;
  }
  return [value];
};

export const normalizeAsSingleton: Normalizer<any> = <T>(value: T | T[] | undefined | null): T => {
  if (value === undefined || value === null) {
    throw new ValidationError('Missing required field.');
  }

  if (Array.isArray(value)) {
    if (value.length > 1) {
      console.log('Expected single value, but got ' + value.length);
    }
    if (value.length === 0) {
      throw new ValidationError('Missing required field.');
    }
    return value[0];
  }

  return value;
};