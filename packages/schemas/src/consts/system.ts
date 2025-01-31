/** The API Resource Indicator for Logto Cloud. It's only useful when domain-based multi-tenancy is enabled. */
export const cloudApiIndicator = 'https://cloud.logto.io/api';

/**
 * In OSS:
 *
 * - Only one single user tenant (`default`) is available.
 * - Admin tenant and Admin Console share one endpoint (`ADMIN_ENDPOINT`).
 *
 * There's no need to parse tenant ID from the first path segment in OSS, and the segment should be a fixed value.
 *
 * If we use `/default`, the URL will look ugly; thus we keep the old fashion `/console`.
 */
export const ossConsolePath = '/console';
