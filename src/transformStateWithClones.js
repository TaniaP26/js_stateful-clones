'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 *
 * @return {Object[]}
 */
function transformStateWithClones(state, actions) {
  let newState = { ...state };
  const history = [];

  for (const action of actions) {
    if (action.type === 'addProperties') {
      newState = { ...newState, ...action.extraData };
      history.push({ ...newState });
    }

    if (action.type === 'removeProperties') {
      newState = { ...newState };

      for (const key of action.keysToRemove) {
        delete newState[key];
      }
      history.push({ ...newState });
    }

    if (action.type === 'clear') {
      newState = {};
      history.push({});
    }
  }

  return history;
}

module.exports = transformStateWithClones;
