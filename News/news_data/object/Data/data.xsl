<?xml version="1.0" ?>
<SMARTFACEPROJECT xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:noNamespaceSchemaLocation="SmartfaceProjectPlayerUpdated.xsd">
<PROJECT SID="-1" WS="http://www.smartface.biz" dateLastResourceUpdated="010101000000" AppID="1701667150" AppName="Smartface Demo" CID="0" Ver="1.0.0" ScreenW="640" ScreenH="1136" Dpi="326" FacebookAppUID="" FacebookAppSecret="" TwitterConsumerKey="" TwitterConsumerSecret="">
	<MAPAPI AndroidMapKey="" IosGeocodingKey="" />
	<ADMOB AdMobPublisherId="" AdMobTestUsage="0" />
	<DEVICEORIENTATIONS DeviceOrientationPortrait="1" DeviceOrientationUpsideDown="0" DeviceOrientationLandscapeLeft="0" DeviceOrientationLandscapeRight="0" />
	<ANDROIDPRODUCTKEY AndroidProductKey="" />
	<ANDROIDSENDERID AndroidSenderID="" />
	<APPLICATIONCACHESIZE ApplicationCacheSize="50" />
	<APPLICATIONNAME ApplicationName="smartface demo" />
	<NAVIGATIONBARUPDATE NavigationBarUpdate="1" />
	<RESOURCES>
	</RESOURCES>
	<FLURRYANALYTICS Enb="0" IOSAppID="" AndroidAppID="" LogUserInfoStatistics="1" LogApplicationUsageDurations="1" LogNetworkUsage="0" LogApplicationStartEvents="0" LogAudioPlayDurations="0" LogVideoPlayDurations="0" LogShowPageActions="0" LogCallActions="0" LogSendSMSActions="0">
		<DATA>
			<PRM Nm="Val1" Val="" />
			<PRM Nm="Val2" Val="" />
			<PRM Nm="Val3" Val="" />
		</DATA>
	</FLURRYANALYTICS>
	<LOGGING LogServerUrl="" MaxLogSize="30" LogError="0" LogWarning="0" LogDebug="0">
	</LOGGING>
	<SESANALYTICS SESAPIKey="SES.8obinex.anaLYt1cs201e" SESAPIURL="http://analytics.smartface.io/api/AnalyticsData/" />
	<DATATABLES>
		<TABLE ID="DAE3DCAA-7779-49C1-A925-9FE430CD0029" Name="emptytable" Media="0" Guid="" OverrideOnUpdate="1" IsSecure="0" RunOnMemory="0">
			<COLUMN ID="1" Name="ds" Type="STRING" PrimaryKey="0" AutoIncrement="0" ForeignKey="00000000-0000-0000-0000-000000000000" DefaultValue="" PrimaryAssistant="0" IsSecure="0" />
		</TABLE>
		<TABLE ID="B15F1AC0-75CE-4079-A769-C231337F6EBA" Name="WebClient_OutDTblWebClient" Media="0" Guid="" OverrideOnUpdate="1" IsSecure="0" RunOnMemory="0">
			<COLUMN ID="1" Name="WebClientId" Type="INTEGER" PrimaryKey="1" AutoIncrement="1" ForeignKey="00000000-0000-0000-0000-000000000000" DefaultValue="" PrimaryAssistant="0" IsSecure="0" />
			<COLUMN ID="2" Name="WebClient" Type="STRING" PrimaryKey="0" AutoIncrement="0" ForeignKey="00000000-0000-0000-0000-000000000000" DefaultValue="" PrimaryAssistant="1" IsSecure="0" />
			<COLUMN ID="3" Name="success" Type="STRING" PrimaryKey="0" AutoIncrement="0" ForeignKey="00000000-0000-0000-0000-000000000000" DefaultValue="" PrimaryAssistant="0" IsSecure="0" />
			<COLUMN ID="4" Name="news" Type="STRING" PrimaryKey="0" AutoIncrement="0" ForeignKey="00000000-0000-0000-0000-000000000000" DefaultValue="" PrimaryAssistant="0" IsSecure="0" />
			<COLUMN ID="5" Name="title" Type="STRING" PrimaryKey="0" AutoIncrement="0" ForeignKey="00000000-0000-0000-0000-000000000000" DefaultValue="" PrimaryAssistant="0" IsSecure="0" />
			<COLUMN ID="6" Name="id" Type="STRING" PrimaryKey="0" AutoIncrement="0" ForeignKey="00000000-0000-0000-0000-000000000000" DefaultValue="" PrimaryAssistant="0" IsSecure="0" />
			<COLUMN ID="7" Name="description" Type="STRING" PrimaryKey="0" AutoIncrement="0" ForeignKey="00000000-0000-0000-0000-000000000000" DefaultValue="" PrimaryAssistant="0" IsSecure="0" />
			<COLUMN ID="8" Name="spot" Type="STRING" PrimaryKey="0" AutoIncrement="0" ForeignKey="00000000-0000-0000-0000-000000000000" DefaultValue="" PrimaryAssistant="0" IsSecure="0" />
			<COLUMN ID="9" Name="image" Type="STRING" PrimaryKey="0" AutoIncrement="0" ForeignKey="00000000-0000-0000-0000-000000000000" DefaultValue="" PrimaryAssistant="0" IsSecure="0" />
			<COLUMN ID="10" Name="error" Type="STRING" PrimaryKey="0" AutoIncrement="0" ForeignKey="00000000-0000-0000-0000-000000000000" DefaultValue="" PrimaryAssistant="0" IsSecure="0" />
		</TABLE>
	</DATATABLES>
	<DATASETS>
		<DATASET ID="B65D5E89-F3BB-48E6-B9FE-FFED15344A0B" Name="Dataset1" TableID="DAE3DCAA-7779-49C1-A925-9FE430CD0029" AutoCommit="0" FastCommit="0" PreserveState="0">
			<SQLTEXT>
			<![CDATA[
SELECT * FROM "emptytable"
			]]>
			</SQLTEXT>
			<COLUMNS>
				<COLUMN ID="1" Name="emptytable.ds" />
			</COLUMNS>
		</DATASET>
		<DATASET ID="E2A8E761-8337-407D-B728-8902C99526A2" Name="WebClient_OutDSetWebClient" TableID="B15F1AC0-75CE-4079-A769-C231337F6EBA" AutoCommit="0" FastCommit="0" PreserveState="0">
			<SQLTEXT>
			<![CDATA[
SELECT "WebClient_OutDTblWebClient"."WebClientId", "WebClient_OutDTblWebClient"."WebClient", "WebClient_OutDTblWebClient"."success", "WebClient_OutDTblWebClient"."news", "WebClient_OutDTblWebClient"."title", "WebClient_OutDTblWebClient"."id", "WebClient_OutDTblWebClient"."description", "WebClient_OutDTblWebClient"."spot", "WebClient_OutDTblWebClient"."image", "WebClient_OutDTblWebClient"."error" FROM "WebClient_OutDTblWebClient"
			]]>
			</SQLTEXT>
			<COLUMNS>
				<COLUMN ID="1" Name="WebClient_OutDTblWebClient.WebClientId" />
				<COLUMN ID="2" Name="WebClient_OutDTblWebClient.WebClient" />
				<COLUMN ID="3" Name="WebClient_OutDTblWebClient.success" />
				<COLUMN ID="4" Name="WebClient_OutDTblWebClient.news" />
				<COLUMN ID="5" Name="WebClient_OutDTblWebClient.title" />
				<COLUMN ID="6" Name="WebClient_OutDTblWebClient.id" />
				<COLUMN ID="7" Name="WebClient_OutDTblWebClient.description" />
				<COLUMN ID="8" Name="WebClient_OutDTblWebClient.spot" />
				<COLUMN ID="9" Name="WebClient_OutDTblWebClient.image" />
				<COLUMN ID="10" Name="WebClient_OutDTblWebClient.error" />
			</COLUMNS>
		</DATASET>
	</DATASETS>
	<WEBCLIENTS>
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
	</WEBCLIENTS>
	<GLOBALEVENTS>
		<ONSTART script="Global_Events_OnStart(e);" />
	</GLOBALEVENTS>
</PROJECT>
</SMARTFACEPROJECT>