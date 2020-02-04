/**
 * Base class for a module.
 * @param {string} id - ID of module.
 * @param {DragonModuleOptions} [options={}] - Options.
 */
class DragonModule {
  constructor(id, { category = "default" } = {}) {
    /**
     * ID of the module.
     * @type {string}
     */
    this.id = id;

    /**
     * ID of the category this belongs to.
     * @type {string}
     */
    this.categoryID = category;

    /**
     * Category this belongs to.
     * @type {Category}
     */
    this.category = null;

    /**
     * The filepath.
     * @type {string}
     */
    this.filepath = null;

    /**
     * The Dragon client.
     * @type {DragonClient}
     */
    this.client = null;

    /**
     * The handler.
     * @type {DragonHandler}
     */
    this.handler = null;
  }

  /**
   * Reloads the module.
   * @returns {DragonModule}
   */
  reload() {
    return this.handler.reload(this.id);
  }

  /**
   * Removes the module.
   * @returns {DragonModule}
   */
  remove() {
    return this.handler.remove(this.id);
  }

  /**
   * Returns the ID.
   * @returns {string}
   */
  toString() {
    return this.id;
  }
}

module.exports = DragonModule;

/**
 * Options for module.
 * @typedef {Object} DragonModuleOptions
 * @prop {string} [category='default'] - Category ID for organization purposes.
 */
