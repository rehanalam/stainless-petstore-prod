// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { buildHeaders } from '../internal/headers';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

export class PetResource extends APIResource {
  /**
   * Add a new pet to the store.
   *
   * @example
   * ```ts
   * const pet = await client.pet.create({
   *   name: 'doggie',
   *   photoUrls: ['string'],
   * });
   * ```
   */
  create(body: PetCreateParams, options?: RequestOptions): APIPromise<Pet> {
    return this._client.post('/pet', { body, ...options });
  }

  /**
   * Returns a single pet.
   *
   * @example
   * ```ts
   * const pet = await client.pet.retrieve(0);
   * ```
   */
  retrieve(petID: number, options?: RequestOptions): APIPromise<Pet> {
    return this._client.get(path`/pet/${petID}`, options);
  }

  /**
   * Update an existing pet by Id.
   *
   * @example
   * ```ts
   * const pet = await client.pet.update({
   *   name: 'doggie',
   *   photoUrls: ['string'],
   * });
   * ```
   */
  update(body: PetUpdateParams, options?: RequestOptions): APIPromise<Pet> {
    return this._client.put('/pet', { body, ...options });
  }

  /**
   * Delete a pet.
   *
   * @example
   * ```ts
   * await client.pet.delete(0);
   * ```
   */
  delete(petID: number, options?: RequestOptions): APIPromise<void> {
    return this._client.delete(path`/pet/${petID}`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Multiple status values can be provided with comma separated strings.
   *
   * @example
   * ```ts
   * const pets = await client.pet.findByStatus();
   * ```
   */
  findByStatus(
    query: PetFindByStatusParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<PetFindByStatusResponse> {
    return this._client.get('/pet/findByStatus', { query, ...options });
  }

  /**
   * Multiple tags can be provided with comma separated strings. Use tag1, tag2, tag3
   * for testing.
   *
   * @example
   * ```ts
   * const pets = await client.pet.findByTags();
   * ```
   */
  findByTags(
    query: PetFindByTagsParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<PetFindByTagsResponse> {
    return this._client.get('/pet/findByTags', { query, ...options });
  }

  /**
   * Updates a pet resource based on the form data.
   *
   * @example
   * ```ts
   * const pet = await client.pet.updateWithForm(0);
   * ```
   */
  updateWithForm(
    petID: number,
    params: PetUpdateWithFormParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<Pet> {
    const { name, status } = params ?? {};
    return this._client.post(path`/pet/${petID}`, { query: { name, status }, ...options });
  }

  /**
   * Upload image of the pet.
   *
   * @example
   * ```ts
   * const response = await client.pet.uploadImage(0);
   * ```
   */
  uploadImage(
    petID: number,
    params: PetUploadImageParams | null | undefined = undefined,
    options?: RequestOptions,
  ): APIPromise<PetUploadImageResponse> {
    const { additionalMetadata, body } = params ?? {};
    return this._client.post(path`/pet/${petID}/uploadImage`, {
      query: { additionalMetadata },
      body: body,
      ...options,
      headers: buildHeaders([{ 'Content-Type': 'application/octet-stream' }, options?.headers]),
    });
  }
}

export interface Pet {
  name: string;

  photoUrls: Array<string>;

  id?: number;

  category?: Pet.Category;

  /**
   * pet status in the store
   */
  status?: 'available' | 'pending' | 'sold' | 'return';

  tags?: Array<Pet.Tag>;
}

export namespace Pet {
  export interface Category {
    id?: number;

    name?: string;
  }

  export interface Tag {
    id?: number;

    name?: string;
  }
}

export type PetFindByStatusResponse = Array<Pet>;

export type PetFindByTagsResponse = Array<Pet>;

export interface PetUploadImageResponse {
  code?: number;

  message?: string;

  type?: string;
}

export interface PetCreateParams {
  name: string;

  photoUrls: Array<string>;

  id?: number;

  category?: PetCreateParams.Category;

  /**
   * pet status in the store
   */
  status?: 'available' | 'pending' | 'sold' | 'return';

  tags?: Array<PetCreateParams.Tag>;
}

export namespace PetCreateParams {
  export interface Category {
    id?: number;

    name?: string;
  }

  export interface Tag {
    id?: number;

    name?: string;
  }
}

export interface PetUpdateParams {
  name: string;

  photoUrls: Array<string>;

  id?: number;

  category?: PetUpdateParams.Category;

  /**
   * pet status in the store
   */
  status?: 'available' | 'pending' | 'sold' | 'return';

  tags?: Array<PetUpdateParams.Tag>;
}

export namespace PetUpdateParams {
  export interface Category {
    id?: number;

    name?: string;
  }

  export interface Tag {
    id?: number;

    name?: string;
  }
}

export interface PetFindByStatusParams {
  /**
   * Status values that need to be considered for filter
   */
  status?: 'available' | 'pending' | 'sold';
}

export interface PetFindByTagsParams {
  /**
   * Tags to filter by
   */
  tags?: Array<string>;
}

export interface PetUpdateWithFormParams {
  /**
   * Name of pet that needs to be updated
   */
  name?: string;

  /**
   * Status of pet that needs to be updated
   */
  status?: string;
}

export interface PetUploadImageParams {
  /**
   * Query param: Additional Metadata
   */
  additionalMetadata?: string;

  /**
   * Body param:
   */
  body?: string | ArrayBuffer | ArrayBufferView | Blob | DataView;
}

export declare namespace PetResource {
  export {
    type Pet as Pet,
    type PetFindByStatusResponse as PetFindByStatusResponse,
    type PetFindByTagsResponse as PetFindByTagsResponse,
    type PetUploadImageResponse as PetUploadImageResponse,
    type PetCreateParams as PetCreateParams,
    type PetUpdateParams as PetUpdateParams,
    type PetFindByStatusParams as PetFindByStatusParams,
    type PetFindByTagsParams as PetFindByTagsParams,
    type PetUpdateWithFormParams as PetUpdateWithFormParams,
    type PetUploadImageParams as PetUploadImageParams,
  };
}
