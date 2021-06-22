const switchComponent = (newProps, path) => {
	return (
		<Switch>
			     
			<Route path={path}>{<CheckChannelDisabledModal {...newProps} />}</Route> 
			 
		</Switch>
	);
};
it("should load CheckChannelDisabledModal - for Back to subjects", () => {
	const newProps = {
		...props,
		contentRule: { ...props.contentRule, selectionLevel: "subjects" },
	};
	const newOptions = {
		...options,
		router: {
			initialPath:
				"/admin/contentselection/subjects/2db60edd6d-efcss3-41a9-94f7-48a3ae699b9b/channels",
			switchProvided: true,
		},
	};
	render(switchComponent(newProps, subjectsdownchannelspath), newOptions);
	const cancelModal = getByTestId("cancelModal");
	const subjectText = getByText(messages.backToSubjectSelection.defaultMessage);
	expect(cancelModal).toBeInTheDocument();
	expect(subjectText).toBeInTheDocument();
});
