<WEBCLIENT ID="F0D55E3C-7088-4789-BE00-5C26E4B815FA" Name="WebClient1" HostUrl="http://services.smartface.io/Samples/News?item=30" Method="0" ContentType="json" AddUserInfo="0" NotifyUpdateStatus="1" MaxReceiveCount="10" TimeOutInterval="60" RequestRawBodyEnabled="0" RequestRawBodyContentType="application/json" WriteMode="0">
	<SendParams>
	</SendParams>
	<ReceiveParams>
		<Params>
			<Param XPath="$" Value="Data.WebClient_OutDSetWebClient.WebClient" Parent="BODY" />
			<Param XPath="$.success" Value="Data.WebClient_OutDSetWebClient.success" Parent="BODY" />
			<Param XPath="$.news" Value="Data.WebClient_OutDSetWebClient.news" Parent="BODY" />
			<Param XPath="$.news.title" Value="Data.WebClient_OutDSetWebClient.title" Parent="BODY" />
			<Param XPath="$.news.id" Value="Data.WebClient_OutDSetWebClient.id" Parent="BODY" />
			<Param XPath="$.news.description" Value="Data.WebClient_OutDSetWebClient.description" Parent="BODY" />
			<Param XPath="$.news.spot" Value="Data.WebClient_OutDSetWebClient.spot" Parent="BODY" />
			<Param XPath="$.news.image" Value="Data.WebClient_OutDSetWebClient.image" Parent="BODY" />
			<Param XPath="$.error" Value="Data.WebClient_OutDSetWebClient.error" Parent="BODY" />
		</Params>
	</ReceiveParams>
	<CustomRequestHeaders>
	</CustomRequestHeaders>
	<ONSYNDICATIONSUCCESS script="Project_WebClient1_OnSyndicationSuccess(e);" />
</WEBCLIENT>
