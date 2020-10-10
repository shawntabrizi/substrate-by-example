/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @format
 */

import React, { Suspense, lazy, useRef, useCallback } from 'react';
import useThemeContext from '@theme/hooks/useThemeContext';
import ExecutionEnvironment from '@docusaurus/ExecutionEnvironment';

const MonacoEditor = lazy(() => import('react-monaco-editor'));

const defaultOptions = {
	minimap: { enabled: false },
	fontSize: '13px',
	wordWrap: 'off',
	scrollBeyondLastLine: false,
	smoothScrolling: true,
	fontFamily: "Menlo, Monaco, Consolas, 'Courier New', monospace",
};

function Editor(props) {
	const { isDarkTheme } = useThemeContext();
	const editorRef = useRef(null);

	const onEditorDidMount = useCallback(e => {
		editorRef.current = e;
		if (props.editorDidMount) props.editorDidMount();
	});

	// Cannot use Monaco Editor w/ SSR
	// https://github.com/facebook/docusaurus/issues/2494
	if (!ExecutionEnvironment.canUseDOM) {
		return <h1>Monaco Editor Unsupported with Server Side Rendering</h1>;
	}

	return (
		<Suspense fallback={<h1>Loading...</h1>}>
			<MonacoEditor
				{...props}
				options={Object.assign({}, defaultOptions, props.options)}
				editorDidMount={onEditorDidMount}
				theme={isDarkTheme ? 'vs-dark' : 'vs-light'}
			/>
		</Suspense>
	);
}

export default Editor;
