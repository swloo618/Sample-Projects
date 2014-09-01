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
		<TABLE ID="15A1A951-F43C-4D1A-AF01-DEDBFDBE8BCD" Name="tblTest" Media="0" Guid="" OverrideOnUpdate="1" IsSecure="0" RunOnMemory="0">
			<COLUMN ID="1" Name="test_info" Type="STRING" PrimaryKey="0" AutoIncrement="0" ForeignKey="00000000-0000-0000-0000-000000000000" DefaultValue="" PrimaryAssistant="0" IsSecure="0" />
		</TABLE>
		<TABLE ID="74FDDDE6-E821-490B-9C6A-A6CC79026AD8" Name="tblQnA" Media="0" Guid="" OverrideOnUpdate="1" IsSecure="0" RunOnMemory="0">
			<COLUMN ID="1" Name="qnaRow" Type="STRING" PrimaryKey="0" AutoIncrement="0" ForeignKey="00000000-0000-0000-0000-000000000000" DefaultValue="" PrimaryAssistant="0" IsSecure="0" />
			<COLUMN ID="2" Name="qnaRowLink" Type="STRING" PrimaryKey="0" AutoIncrement="0" ForeignKey="00000000-0000-0000-0000-000000000000" DefaultValue="" PrimaryAssistant="0" IsSecure="0" />
		</TABLE>
		<TABLE ID="D59199CE-C5A1-4055-92B6-37478BF8137A" Name="tblGuides" Media="0" Guid="" OverrideOnUpdate="1" IsSecure="0" RunOnMemory="0">
			<COLUMN ID="1" Name="guidesRow" Type="STRING" PrimaryKey="0" AutoIncrement="0" ForeignKey="00000000-0000-0000-0000-000000000000" DefaultValue="" PrimaryAssistant="0" IsSecure="0" />
			<COLUMN ID="2" Name="guidesRowLink" Type="STRING" PrimaryKey="0" AutoIncrement="0" ForeignKey="00000000-0000-0000-0000-000000000000" DefaultValue="" PrimaryAssistant="0" IsSecure="0" />
		</TABLE>
		<TABLE ID="FA48F3CC-588D-418F-9E44-F5D20DBC14DE" Name="tblTipsNTricks" Media="0" Guid="" OverrideOnUpdate="1" IsSecure="0" RunOnMemory="0">
			<COLUMN ID="1" Name="tipsntricksRow" Type="STRING" PrimaryKey="0" AutoIncrement="0" ForeignKey="00000000-0000-0000-0000-000000000000" DefaultValue="" PrimaryAssistant="0" IsSecure="0" />
			<COLUMN ID="2" Name="tipsntricksRowLink" Type="STRING" PrimaryKey="0" AutoIncrement="0" ForeignKey="00000000-0000-0000-0000-000000000000" DefaultValue="" PrimaryAssistant="0" IsSecure="0" />
		</TABLE>
	</DATATABLES>
	<DATASETS>
		<DATASET ID="331B3A28-B3E5-4FDC-8080-0F5BB10FF0E9" Name="DS_Test" TableID="15A1A951-F43C-4D1A-AF01-DEDBFDBE8BCD" AutoCommit="0" FastCommit="0" PreserveState="0">
			<SQLTEXT>
			<![CDATA[
SELECT "tblTest"."test_info" FROM "tblTest"
			]]>
			</SQLTEXT>
			<COLUMNS>
				<COLUMN ID="1" Name="tblTest.test_info" />
			</COLUMNS>
		</DATASET>
		<DATASET ID="7AAD1775-A956-41B9-A19E-87BE45DB02C5" Name="DS_QnA" TableID="74FDDDE6-E821-490B-9C6A-A6CC79026AD8" AutoCommit="0" FastCommit="0" PreserveState="0">
			<SQLTEXT>
			<![CDATA[
SELECT "tblQnA"."qnaRow", "tblQnA"."qnaRowLink" FROM "tblQnA"
			]]>
			</SQLTEXT>
			<COLUMNS>
				<COLUMN ID="1" Name="tblQnA.qnaRow" />
				<COLUMN ID="2" Name="tblQnA.qnaRowLink" />
			</COLUMNS>
		</DATASET>
		<DATASET ID="278BDE4B-0C4E-4852-A1B1-B96D5F6CE72E" Name="DS_TipsTricks" TableID="FA48F3CC-588D-418F-9E44-F5D20DBC14DE" AutoCommit="0" FastCommit="0" PreserveState="0">
			<SQLTEXT>
			<![CDATA[
SELECT "tblTipsNTricks"."tipsntricksRow", "tblTipsNTricks"."tipsntricksRowLink" FROM "tblTipsNTricks"
			]]>
			</SQLTEXT>
			<COLUMNS>
				<COLUMN ID="1" Name="tblTipsNTricks.tipsntricksRow" />
				<COLUMN ID="2" Name="tblTipsNTricks.tipsntricksRowLink" />
			</COLUMNS>
		</DATASET>
		<DATASET ID="8B826CDE-125A-4522-BA5A-3B27294746D2" Name="DS_Guides" TableID="D59199CE-C5A1-4055-92B6-37478BF8137A" AutoCommit="0" FastCommit="0" PreserveState="0">
			<SQLTEXT>
			<![CDATA[
SELECT "tblGuides"."guidesRow", "tblGuides"."guidesRowLink" FROM "tblGuides"
			]]>
			</SQLTEXT>
			<COLUMNS>
				<COLUMN ID="1" Name="tblGuides.guidesRow" />
				<COLUMN ID="2" Name="tblGuides.guidesRowLink" />
			</COLUMNS>
		</DATASET>
	</DATASETS>
	<GLOBALEVENTS>
		<ONSTART script="Global_Events_OnStart(e);" />
		<ONERROR script="Global_Events_OnError(e);" />
	</GLOBALEVENTS>
</PROJECT>
</SMARTFACEPROJECT>