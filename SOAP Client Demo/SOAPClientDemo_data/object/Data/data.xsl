<?xml version="1.0" ?>
<SMARTFACEPROJECT xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:noNamespaceSchemaLocation="SmartfaceProjectPlayerUpdated.xsd">
<PROJECT SID="-1" WS="http://www.smartface.biz" dateLastResourceUpdated="010101000000" AppID="1701667150" AppName="Smartface Demo" CID="0" Ver="1.0.0" ScreenW="320" ScreenH="480" Dpi="163" FacebookAppUID="" FacebookAppSecret="" TwitterConsumerKey="" TwitterConsumerSecret="">
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
		<TABLE ID="AA11A1B5-212D-4376-A308-2706CD2B0280" Name="tblTitle" Media="0" Guid="" OverrideOnUpdate="1" IsSecure="0" RunOnMemory="0">
			<COLUMN ID="1" Name="title" Type="STRING" PrimaryKey="0" AutoIncrement="0" ForeignKey="00000000-0000-0000-0000-000000000000" DefaultValue="" PrimaryAssistant="0" IsSecure="0" />
		</TABLE>
	</DATATABLES>
	<DATASETS>
		<DATASET ID="D4640A17-A69E-4AAB-907D-2A9B612E4FBA" Name="dSetTitle" TableID="AA11A1B5-212D-4376-A308-2706CD2B0280" AutoCommit="0" FastCommit="0" PreserveState="0">
			<SQLTEXT>
			<![CDATA[
SELECT "tblTitle".* FROM "tblTitle"
			]]>
			</SQLTEXT>
			<COLUMNS>
				<COLUMN ID="1" Name="tblTitle.title" />
			</COLUMNS>
		</DATASET>
	</DATASETS>
	<GLOBALEVENTS>
		<ONSTART script="Global_Events_OnStart(e);" />
		<ONERROR script="Global_Events_OnError(e);" />
	</GLOBALEVENTS>
</PROJECT>
</SMARTFACEPROJECT>