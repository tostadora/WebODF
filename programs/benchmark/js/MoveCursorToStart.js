/**
 * @license
 * Copyright (C) 2010-2014 KO GmbH <copyright@kogmbh.com>
 *
 * @licstart
 * This file is part of WebODF.
 *
 * WebODF is free software: you can redistribute it and/or modify it
 * under the terms of the GNU Affero General Public License (GNU AGPL)
 * as published by the Free Software Foundation, either version 3 of
 * the License, or (at your option) any later version.
 *
 * WebODF is distributed in the hope that it will be useful, but
 * WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU Affero General Public License for more details.
 *
 * You should have received a copy of the GNU Affero General Public License
 * along with WebODF.  If not, see <http://www.gnu.org/licenses/>.
 * @licend
 *
 * @source: http://www.webodf.org/
 * @source: https://github.com/kogmbh/WebODF/
 */


define(["BenchmarkAction"], function(BenchmarkAction) {
    'use strict';

    /**
     * Move the cursor to the start of the document using the same interface as ctrl/cmd+home
     * @constructor
     */
    function MoveCursorToStart() {
        var state = {description: "Move to document start (ctrl+home)"},
            action = new BenchmarkAction(state);

        this.subscribe = action.subscribe;
        this.state = state;

        /**
         * @param {!OdfBenchmarkContext} context
         */
        this.start = function(context) {
            context.storeCurrentPosition(state);
            action.start();
            context.sessionController.getSelectionController().moveCursorToDocumentStart();
            action.stop();
            context.recordDistanceFromPreviousPosition(state);
            action.complete(true);
        }
    }

    return MoveCursorToStart;
});
