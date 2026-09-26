import test from 'node:test';
import assert from 'node:assert/strict';
import { CampsiteManager } from './campsiteManager.js';

test('desert filter returns only desert campsites', () => {
    const manager = new CampsiteManager([
        { id: 1, name: 'Desert Camp', location: 'Arizona', type: 'desert', activities: [] },
        { id: 2, name: 'Forest Camp', location: 'Oregon', type: 'forest', activities: [] }
    ]);

    manager.setFilter('desert');

    assert.deepEqual(manager.getFilteredCampsites().map(campsite => campsite.id), [1]);
});
