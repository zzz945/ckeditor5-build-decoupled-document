import Plugin from '@ckeditor/ckeditor5-core/src/plugin';
import ButtonView from '@ckeditor/ckeditor5-ui/src/button/buttonview';
import linkToPageIcon from './icon.svg';

export default class LinkToPage extends Plugin {
	init() {
		const editor = this.editor;

		editor.ui.componentFactory.add( 'linkToPage', locale => {
			const view = new ButtonView( locale );

			view.set( {
				label: 'Insert Link to Page',
				icon: linkToPageIcon,
				tooltip: true
			} );

			view.on( 'execute', () => {
				WIKI.$emit( 'editorLinkToPage' );
			} );

			return view;
		} );
	}
}
